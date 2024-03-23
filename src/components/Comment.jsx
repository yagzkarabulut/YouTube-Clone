import millify from "millify";
import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { MdOutlineAlignHorizontalRight } from "react-icons/md";
import { getData } from "../helpers/getData";
import { useSearchParams } from "react-router-dom";

const Comment = () => {
  const [comment, setComment] = useState();

  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    getData(`/comments?id=${id}`).then((comm) => setComment(comm));
  }, [id]);
  console.log(comment);
  return <div></div>;
};

export default Comment;
