import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {LOG_IN_REQUEST} from '../reducers/user';


const Home = () => {
  const {user ,isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c,i)=>{
          return (
            <PostCard key={i} post={c}/>
          )
      })}
    </div>
  )
}

export default Home;
