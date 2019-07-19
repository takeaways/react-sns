import React from 'react';
import {Input, Form, Button, Card, Icon, Avatar} from 'antd'
import PropTypes from 'prop-types';


const PostCard = ({post}) => {
  return (
    <Card
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img}/>}
      actions={[
        <Icon type="retweet" key="retweet"/>,
        <Icon type="heart" key="heart"/>,
        <Icon type="message" key="message"/>,
        <Icon type="ellipsis" key="ellipsis"/>
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  )
}

PostCard.propTypes = {
  post:PropTypes.shape({
    User:PropTypes.object,
    content:PropTypes.string,
    img:PropTypes.string,
    createdAt:PropTypes.string
  })
}

export default PostCard;
