import React, {useCallback,useState, useEffect} from 'react';
import {Input, Form, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_POST_REQUEST} from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const {imagePath, isAddingPost, postAdded} = useSelector(state => state.post);

  useEffect(()=>{
    setText('');
  },[postAdded === true]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type:ADD_POST_REQUEST,
      data:{
        text,
      }
    });
  },[text]);

  const onChageText = useCallback((e)=>{
    setText(e.target.value);
  },[])




  return (
    <Form onSubmit={onSubmit} style={{marginBottom:20}} encType='multipart/form-data'>
      <Input.TextArea value={text} onChange={onChageText} maxLength={140} placeholder="write..."/>
      <div>
        <input type="file" multiple hidden/>
        <Button>Upload Image</Button>
        <Button type="primary" style={{float:'right'}} htmlType="submit" loading={isAddingPost}>등록</Button>
      </div>
      <div>
        {imagePath.map((v, i)=>{
          return (
            <div key={v} style={{display:'inline-block'}}>
              <img src={'http://localhost:3065/'+v} style={{width:'200px'}} alt={v}/>
              <div>
                <Button>Delete</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm;
