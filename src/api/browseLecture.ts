import getEnvVars from "../../environment";
import {
  IBrowseLectureTopicDTO,
  IsContainedArr,
} from "../interfaces/browseLectures.interface";
import { getRandomNum } from "../util/getRandomNum";

const { apiUrl } = getEnvVars();

export const browseLectures = async (
  pageParam: number,
  maxIndex: number,
  isContainedArr: IsContainedArr
) => {
  const MAX_BROWSE_TOPICS = maxIndex === 0 ? 40 : Math.min(40, maxIndex);
  const MAX_TOPIC = 5;

  const isFirstPage = pageParam === 1;
  const isMax = MAX_BROWSE_TOPICS <= MAX_TOPIC * pageParam;
  const newIndexesLen = isMax
    ? MAX_BROWSE_TOPICS - MAX_TOPIC * (pageParam - 1)
    : MAX_TOPIC;
  const newIndexes = [];
  if (!isFirstPage) {
    // get new topic indexes
    for (let i = 0; i < newIndexesLen; ++i) {
      const random = getRandomNum(maxIndex) + 1;
      if (isContainedArr[random]) {
        --i;
        continue;
      }
      newIndexes.push(random);
      isContainedArr[random] = true;
    }
  }

  try {
    const result = await (
      await fetch(`${apiUrl}/topics/${isFirstPage ? "initial" : "browse"}`, {
        credentials: "include",
        headers: {
          new_indexes: JSON.stringify(newIndexes),
        },
      })
    ).json();

    const { topics, numOfTopics } = result as {
      topics: IBrowseLectureTopicDTO[];
      numOfTopics: number;
    };

    return {
      result: topics,
      nextPage: pageParam + 1,
      isLast: isMax,
      numOfTopics,
    };
  } catch (error) {
    console.error(error);
    // Sentry.captureException(`Catched Error : ${error}`);
    return null;
  }
};
