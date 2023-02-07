import { FC } from "react";
import { ILecture } from "../interfaces/lecture.interface";
import { ITopic } from "../interfaces/topic.interface";
import { AspectRatio, Box, FlatList, Image, Text } from "native-base";
import { useWindowDimensions } from "react-native";
import { useRecoilValue } from "recoil";
import { numOfItemInWidthAtom } from "../atoms/numOfItemInWidth.atom";

interface IProps {
  lectureList: ILecture<ITopic>[];
}

const LectureSlider: FC<IProps> = ({ lectureList }: IProps) => {
  const numOfItemInWidth = useRecoilValue(numOfItemInWidthAtom);
  const { width } = useWindowDimensions();

  return (
    <FlatList
      horizontal
      data={lectureList}
      renderItem={({ item: lecture }) => (
        <Box maxW={width / numOfItemInWidth} p="1">
          {/* Thumbnail */}
          <AspectRatio ratio={16 / 9} width="full">
            <Image
              resizeMode="cover"
              source={{
                uri: lecture.thumbnailUrl,
              }}
              alt="Thumbnail of a Lecture"
            />
          </AspectRatio>
          {/* Title */}
          <Text color="white">{lecture.title}</Text>
        </Box>
      )}
      keyExtractor={(item, index) =>
        `lecture-slider-lecture-${index}-${item._id}`
      }
      flexDir="row"
    />
  );
};

export default LectureSlider;
