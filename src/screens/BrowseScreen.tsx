import { Box } from "native-base";
import { FC, useEffect, useMemo, useState } from "react";
import LectureSlider from "../components/LectureSlider";
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import {
  IBrowseLectureTopicDTO,
  IsContainedArr,
} from "../interfaces/browseLectures.interface";
import { useInfiniteQuery } from "@tanstack/react-query";
import { browseLectures } from "../api/browseLecture";

const BrowseScreen: FC = () => {
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const [isContainedArr, setIsContainedArr] = useState<IsContainedArr>([]);

  const { fetchNextPage, hasNextPage, data, isFetching } = useInfiniteQuery(
    [
      "browse",
      // 시청중인 강의 목록을 최신 상태로 유지하기 위함.
      // user?.viewed?.[0]?.lectureId,
      // user?.viewed?.[0]?.videos?.[0]?.videoId,
      // user?.viewed?.[0]?.videos?.[0]?.time,
    ],
    ({ pageParam = 1 }) =>
      browseLectures(pageParam as number, maxIndex, isContainedArr),
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage?.isLast ? undefined : lastPage?.nextPage,
    }
  );

  const topics = useMemo(() => {
    const result: IBrowseLectureTopicDTO[] = [];

    data?.pages.forEach((page) =>
      page?.result.forEach((topic) => result.push(topic))
    );

    return result;
  }, [data]);

  // maxIndex, isContainedArr에 데이터 넣기
  useEffect(() => {
    if (!data || !data.pages[0]) return;

    const arr = new Array(data.pages[0]?.numOfTopics + 1);
    for (let i = 0; i < data.pages[0]?.numOfTopics + 1; ++i) arr[i] = false;

    data.pages.forEach((page, i) => {
      if (!page) return;
      // first page
      if (i === 0 && !!page.numOfTopics) setMaxIndex(page.numOfTopics);
      page.result?.forEach((topic) => (arr[topic.index] = true));
    });

    setIsContainedArr(arr);
  }, [data]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // event.nativeEvent.contentOffset: 얼마나 스크롤 되었는지. {x: number, y: number}
    // event.nativeEvent.contentSize: 스크롤 할 수 있는 총 사이즈 {"height": number, "width": number}
    // event.nativeEvent.layoutMeasurement: 컨테이너의 사이즈 {"height": number, "width": number}

    // const maxContentOffset =
    //   event.nativeEvent.contentSize.height -
    //   event.nativeEvent.layoutMeasurement.height;

    let pivot =
      event.nativeEvent.contentSize.height -
      2 * event.nativeEvent.layoutMeasurement.height;

    pivot = pivot > 0 ? pivot : 0;

    const isFetchNext = event.nativeEvent.contentOffset.y > pivot;

    if (isFetchNext && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <Box flex="1">
      <FlatList
        data={topics}
        renderItem={({ item: topic }) => (
          <Box>
            <LectureSlider lectureList={topic.lectures} />
          </Box>
        )}
        keyExtractor={(topic, index) =>
          `browse-screen-topic-${index}-${topic._id}`
        }
        onScroll={onScroll}
      />
    </Box>
  );
};

export default BrowseScreen;
