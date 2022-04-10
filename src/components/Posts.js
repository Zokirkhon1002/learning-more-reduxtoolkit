import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewLoader from "../loader/Loader";
import { fetchPost } from "../redux/slices/PostSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //     const proFunc = async ()=> {
  //         let data = await dispatch(fetchPost()).unwrap()
  //         setData(data);
  //     }
  //     proFunc();
  // },[dispatch])

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const { loading, postsList } = useSelector((state) => state.post);

  return (
    <div>
      {loading ? (
        <NewLoader />
      ) : (
        postsList?.map((data) => <Post key={data.id} data={data} />)
      )}
    </div>
  );
};

export default Posts;
