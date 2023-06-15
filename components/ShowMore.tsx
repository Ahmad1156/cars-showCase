"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { showMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();
  const handlenNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="showMore"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handlenNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
