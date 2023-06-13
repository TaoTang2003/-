import {Table, Tag, Input, Button, Form} from 'antd';
import React, {useState} from 'react';

type Post = {
  key: string;
  name: string;
  id: string;
  tags: string[];
  postContent: string;
  postTime: string;
  isPinned: boolean;
};

type PostTableProps = {
  posts: Post[];
  onApprove: (post: Post) => void;
  onReject: (post: Post) => void;
};

const defaultPosts: Post[] = [
  {
    key: '1',
    id: '001',
    name: '张三',
    postContent: '这是一条动态',
    postTime: '2023/06/13',
    tags: ['测试1', '测试2'],
    isPinned: true,
  },
  {
    key: '2',
    id: '002',
    name: '测试用户',
    postContent: '这是一条动态',
    postTime: '2023/06/13',
    tags: ['测试1', '测试2'],
    isPinned: false,
  },
];

const columns = (onApprove: (post: Post) => void, onReject: (post: Post) => void) => [
  {
    title: '用户名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '用户ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '动态标签',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: '动态内容',
    dataIndex: 'postContent',
    key: 'postContent',
  },
  {
    title: '发布时间',
    dataIndex: 'postTime',
    key: 'postTime',
  },
  {
    title: '是否置顶',
    key: 'isPinned',
    render: (text: string, record: Post) => (
      <Button type={record.isPinned ? "primary" : "default"} onClick={() => togglePin(record)}>
        {record.isPinned ? "取消置顶" : "置顶"}
      </Button>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text: string, record: Post) => (
      <span>
        <button onClick={() => onApprove(record)}>通过</button>
        <button onClick={() => onReject(record)}>拒绝</button>
      </span>
    ),
  },
];

const PostTable: React.FC<PostTableProps> = ({ posts = defaultPosts, onApprove, onReject }) => {
  const [data, setData] = useState(posts);
const togglePin = (post: Post) => {
    const newPosts = data.map((item: Post) => {
      if (item.key === post.key) {
        return {...item, isPinned: !item.isPinned};
      }
      return item;
    });
    setData(newPosts);
}
  const [searchName, setSearchName] = useState('');
  const [searchId, setSearchId] = useState('');
  const handleSearch = (values: any) => {
    // 根据表单值进行搜索
    setSearchName(values.userName);
    setSearchId(values.userId);
  };

  const filteredPosts = posts.filter(post =>
    post.name.includes(searchName) || post.id.includes(searchId)
    // 你可以在这里添加更多的过滤条件，例如时间段和标签
  );

  return (
    <div>
      <Form onFinish={handleSearch}>
        <Form.Item name="userName">
          <Input placeholder="根据用户名搜索" />
        </Form.Item>
        <Form.Item name="userId">
          <Input placeholder="根据用户ID搜索" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Form.Item>
      </Form>
      <Table columns={columns(onApprove, onReject)} dataSource={filteredPosts} />
    </div>
  );
};

export default PostTable;

