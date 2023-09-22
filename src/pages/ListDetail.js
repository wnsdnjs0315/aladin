import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const ListDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductsDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data)
    setProduct(data)
  }
  useEffect(() => {
    getProductsDetail()
  }, [])
  return (
    <>
      <Row className='list-detail'>
        <Col className='listdetail-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col className='detail-info'>
          <div className='title'>{product?.title}</div>
          <div className='price'>가격 : {product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div className='genre'>장르 : {product?.genre}</div>
          <div className='writer'>작가 : {product?.writer}</div>
        </Col>
      </Row>
    </>
  )
}

export default ListDetail