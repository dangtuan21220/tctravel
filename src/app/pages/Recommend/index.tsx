import React, { useState } from 'react';
import Header from 'app/components/Header/Header';
import Styled from './styled';
import {
  Breadcrumb,
  Button,
  Col,
  InputNumber,
  Row,
  Select,
  Space,
  Table,
} from 'antd';
import { HomeOutlined, EnvironmentFilled } from '@ant-design/icons';
import Map, {
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl';
import GeocoderControl from './geocoder-control';
import Rating from './rating';
import { recommendService } from 'services/recommendService';
import { render } from '@testing-library/react';
import { AnyAaaaRecord } from 'dns';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoidHVhbmR2MjEiLCJhIjoiY2w5d3VyY2JvMDExYjN2cGwya3oydXh3ZCJ9.i1W8dB9-9cIr1JjD5ocADg';

const optionTime = [
  {
    value: 'weekday',
    label: 'Ngày trong tuần',
  },
  {
    value: 'weekend',
    label: 'Ngày cuối tuần',
  },
  {
    value: 'holiday',
    label: 'Ngày lễ',
  },
];

const optionWeather = [
  {
    value: 'sunny',
    label: 'Nhiều nắng',
  },
  {
    value: 'nice',
    label: 'Trời đẹp',
  },
  {
    value: 'cloudy',
    label: 'Nhiều mây',
  },
  {
    value: 'rainy',
    label: 'Nhiều mưa',
  },
];
const optionCompanion = [
  {
    value: 'family',
    label: 'Gia đình',
  },
  {
    value: 'friend',
    label: 'Bạn bè',
  },
  {
    value: 'lover',
    label: 'Người yêu',
  },
  {
    value: 'alone',
    label: 'Một mình',
  },
];

function Recommend() {
  const [time, setTime] = useState('weekday');
  const [weather, setWeather] = useState('sunny');
  const [companion, setCompanion] = useState('family');
  const [number, setNumber] = useState<number>(1);
  const [isModalRating, setIsModalRating] = useState(false);
  const [startLat, setStartLat] = useState();
  const [startLng, setStartLng] = useState();
  const [dataSource, setDataSource] = useState<any>([]);
  const onGeolocate = positionOptions => {
    console.log(positionOptions);
    setStartLat(positionOptions?.coords?.latitude);
    setStartLng(positionOptions?.coords?.longitude);
  };
  const handleChangeTime = (value: string) => {
    setTime(value);
  };
  const handleChangeWeather = (value: string) => {
    setWeather(value);
  };
  const handleChangeCompanion = (value: string) => {
    setCompanion(value);
  };
  const handleChangeNumber = (value: any) => {
    setNumber(value);
  };

  const columns = [
    {
      title: 'STT',
      key: 'stt',
      width: 80,
      render: (_, record, index) => index + 1,
    },
    {
      title: 'Tên địa điểm',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'avgRating',
      key: 'avgRating',
    },
    {
      title: 'Đánh giá của tôi',
      dataIndex: 'myRating',
      key: 'myRating',
      render: (_, record) =>
        record.myRating === 0 ? 'Chưa đánh giá' : record.myRating,
    },
    {
      title: '',
      key: 'action',
      width: '20%',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Chỉ đường</Button>
          <Button
            onClick={() => {
              setIsModalRating(true);
            }}
          >
            Đánh giá
          </Button>
        </Space>
      ),
    },
  ];

  const onSubmit = async () => {
    let params = {
      id: localStorage.getItem('user-id'),
      weather: weather,
      time: time,
      partner: companion,
      number: number,
    };
    const response = await recommendService.getAddress(params);
    setDataSource(response.data.data);
  };

  return (
    <Styled.Container>
      <Header />
      <Row justify="center">
        <Col span={19}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Gợi ý</Breadcrumb.Item>
          </Breadcrumb>

          <div className="title">
            <h3>Gợi ý địa điểm du lịch</h3>
          </div>
          <Row gutter={40} className="map-recommend">
            <Col span={15}>
              <Map
                initialViewState={{
                  longitude: 105.8521179364734,
                  latitude: 21.028814782193013,
                  zoom: 10,
                }}
                mapboxAccessToken={MAPBOX_TOKEN}
                style={{ width: '100%', height: '70vh' }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              >
                <GeolocateControl
                  position="top-left"
                  onGeolocate={positionOptions => onGeolocate(positionOptions)}
                />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />
                {dataSource.length > 0 &&
                  dataSource.map(item => (
                    <>
                      <Marker
                        longitude={item?.lng || 0}
                        latitude={item?.lat || 0}
                        anchor="top"
                      >
                        <EnvironmentFilled
                          style={{ color: '#1890ff', fontSize: '26px' }}
                        />
                      </Marker>
                      <Popup
                        closeButton={false}
                        closeOnClick={false}
                        longitude={item?.lng || 0}
                        latitude={item?.lat || 0}
                      >
                        {item?.name || ''}
                      </Popup>
                    </>
                  ))}
                {/* <Marker
                  longitude={105.8521179364734}
                  latitude={21.028814782193013}
                  anchor="top"
                >
                  <EnvironmentFilled
                    style={{ color: 'blue', fontSize: '24px' }}
                  />
                </Marker>
                <Popup
                  closeButton={false}
                  closeOnClick={false}
                  longitude={105.8521179364734}
                  latitude={21.028814782193013}
                >
                  Hồ hoàn kiếm
                </Popup> */}
                <GeocoderControl
                  mapboxAccessToken={MAPBOX_TOKEN}
                  position="top-right"
                />
              </Map>
            </Col>
            <Col span={9} className="filter">
              <Row gutter={8} className="filter-item">
                <Col className="gutter-row" span={9}>
                  <div className="lable">Thời gian:</div>
                </Col>
                <Col className="gutter-row" span={15}>
                  <Select
                    defaultValue={time}
                    size="large"
                    style={{ width: '100%' }}
                    onChange={handleChangeTime}
                    options={optionTime}
                  />
                </Col>
              </Row>
              <Row gutter={8} className="filter-item">
                <Col className="gutter-row" span={9}>
                  <div className="lable">Thời tiết:</div>
                </Col>
                <Col className="gutter-row" span={15}>
                  <Select
                    defaultValue={weather}
                    size="large"
                    style={{ width: '100%' }}
                    onChange={handleChangeWeather}
                    options={optionWeather}
                  />
                </Col>
              </Row>
              <Row gutter={8} className="filter-item">
                <Col className="gutter-row" span={9}>
                  <div className="lable">Người đồng hành:</div>
                </Col>
                <Col className="gutter-row" span={15}>
                  <Select
                    defaultValue={companion}
                    size="large"
                    style={{ width: '100%' }}
                    onChange={handleChangeCompanion}
                    options={optionCompanion}
                  />
                </Col>
              </Row>
              <Row gutter={8} className="filter-item">
                <Col className="gutter-row" span={9}>
                  <div className="lable">Số địa điểm:</div>
                </Col>
                <Col className="gutter-row" span={15}>
                  <InputNumber
                    style={{ width: '100%' }}
                    size="large"
                    min={1}
                    max={5}
                    defaultValue={number}
                    onChange={handleChangeNumber}
                  />
                </Col>
              </Row>
              <Row className="filter-item">
                <Col className="gutter-row" span={7}>
                  <Button size="large" type="primary" block onClick={onSubmit}>
                    Tìm kiếm
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          {dataSource.length > 0 && (
            <div className="result">
              <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                pagination={false}
              />
            </div>
          )}
        </Col>
      </Row>
      <Rating
        isOpenModal={isModalRating}
        onClose={() => setIsModalRating(false)}
      />
    </Styled.Container>
  );
}

export default Recommend;
