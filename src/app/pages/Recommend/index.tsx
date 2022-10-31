import React from 'react';
import Header from 'app/components/Header/Header';
import Styled from './styled';
import { Breadcrumb, Col, Row } from 'antd';
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

const MAPBOX_TOKEN =
  'pk.eyJ1IjoidHVhbmR2MjEiLCJhIjoiY2w5d3VyY2JvMDExYjN2cGwya3oydXh3ZCJ9.i1W8dB9-9cIr1JjD5ocADg';

function Recommend() {
  const onGeolocate = positionOptions => {
    console.log(positionOptions);
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
          <Row gutter={[16, 16]} className="map-recommend">
            <Col span={15}>
              <Map
                initialViewState={{
                  longitude: 105.8521179364734,
                  latitude: 21.028814782193013,
                  zoom: 15,
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
                <Marker
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
                </Popup>
                <GeocoderControl
                  mapboxAccessToken={MAPBOX_TOKEN}
                  position="top-right"
                />
              </Map>
            </Col>
            <Col span={9}></Col>
          </Row>
        </Col>
      </Row>
    </Styled.Container>
  );
}

export default Recommend;
