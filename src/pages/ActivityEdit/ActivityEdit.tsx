import { Form, Input, DatePicker, Button } from 'antd';
import React, { useState } from 'react';

type Event = {
  image: string;
  name: string;
  description: string;
};

const EventEditPage: React.FC = () => {
  const [event, setEvent] = useState<Event>({
    image: '',
    name: '',
    description: '',
  });

  const handleSubmit = (values: any) => {
    setEvent({
      ...event,
      ...values,
    });
  };

};

export default EventEditPage;
