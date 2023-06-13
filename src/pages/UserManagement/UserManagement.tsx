import {Table, Tag} from 'antd';
import React from 'react';

type User = {
  key: string;
  name: string;
  id: string;
  tags: string[];
  contact: string;
  address: string;
  requirements: string;
  signature: string;
};

type UserTableProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

const columns = (onEdit: (user: User) => void, onDelete: (user: User) => void) => [
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
    title: '用户标签',
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
    title: '联系方式',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '需求',
    dataIndex: 'requirements',
    key: 'requirements',
  },
  {
    title: '个性签名',
    dataIndex: 'signature',
    key: 'signature',
  },
  {
    title: '用户角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '操作',
    key: 'action',
    render: (text: string, record: User) => (
      <span>
        <button onClick={() => onEdit(record)}>编辑</button>
        <button onClick={() => onDelete(record)}>删除</button>
      </span>
    ),
  },
];




const defaultUsers: User[] = [
  {
    key: '1',
    name: '张三',
    id: '001',
    tags: ['管理员', '测试'],
    contact: '13800138000',
    address: '北京市',
    requirements: '需要A，B，C功能',
    signature: '这是个性签名',
    role: '管理员'
  },
  {
    key: '2',
    name: '测试用户',
    id: '002',
    tags: ['测试'],
    contact: '13800138000',
    address: '北京市',
    requirements: '需要B，C功能',
    signature: '这是个性签名',
    role: '游客'
  },
  {
    key: '3',
    name: '测试用户',
    id: '003',
    tags: ['测试'],
    contact: '13800138000',
    address: '北京市',
    requirements: '需要C功能',
    signature: '这是个性签名',
    role: '会员'
  },
  {
    key: '4',
    name: '测试用户',
    id: '004',
    tags: ['测试'],
    contact: '13800138000',
    address: '北京市',
    requirements: '需要All功能',
    signature: '这是个性签名',
    role: '特权会员'
  },
];

const UserTable: React.FC<UserTableProps> = ({ users = defaultUsers , onEdit, onDelete }) => (
  <Table columns={columns(onEdit, onDelete)} dataSource={users} />
);

export default UserTable;

