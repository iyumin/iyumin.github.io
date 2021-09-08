import React, { SetStateAction } from 'react';
import styled from 'styled-components';

import { Dialog, Input, Button, Loading } from '@/components';
import { IPicture } from '@/types';
import { apiV2 } from '@/utils';

import { Header, Card, Container } from '../_partial/admin-container-layout';

const Wrapper = styled.div``;

const DialogContent = styled.div`
  padding: 32px 0;
`;

const PictureForm = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  label {
    width: 70px;
    text-align: right;
  }
`;

export default function AdminPicture () :React.ReactElement {
  const pageLimit = 12; // pictures per page

  const [offset, setOffset] = React.useState(0);

  const [pictureList, setPictureList] = React.useState<IPicture[]>();
  const [selectedPicture, setSelectedPicture] = React.useState<IPicture>();

  const [isMorePrev, setIsMorePrev] = React.useState(true);
  const [isMoreNext, setIsMoreNext] = React.useState(true);

  const [uidValue, setUidValue] = React.useState<string>();
  const [titleValue, setTitleValue] = React.useState<string>();
  const [authorValue, setAuthorValue] = React.useState<string>();
  const [publishValue, setPublishValue] = React.useState<string>();
  const [tagsValue, setTagsValue] = React.useState<string>();
  const [sourceValue, setSourceValue] = React.useState<string>();
  const [descValue, setDescValue] = React.useState<string>();
  const [widthValue, setWidthValue] = React.useState<number>();
  const [heightValue, setHeightValue] = React.useState<number>();
  const [latitudeValue, setLatitudeValue] = React.useState<number>();
  const [longitudeValue, setLongitudeValue] = React.useState<number>();
  const [createAtValue, setCreateAtValue] = React.useState<string>();
  const [updateAtValue, setUpdateAtValue] = React.useState<string>();

  /**
   * set all states to undefined together.
   */
  const setAllUndefined = () => {
    setUidValue(undefined);
    setSelectedPicture(undefined);
    setTitleValue(undefined);
    setAuthorValue(undefined);
    setPublishValue(undefined);
    setTagsValue(undefined);
    setSourceValue(undefined);
    setDescValue(undefined);
    setWidthValue(undefined);
    setHeightValue(undefined);
    setLatitudeValue(undefined);
    setLongitudeValue(undefined);
    setCreateAtValue(undefined);
    setUpdateAtValue(undefined);
  };

  /**
   * handle click the picture
   * @param e mouse event
   * @param p picture interface
   */
  const handleEdit = (e: React.MouseEvent<HTMLElement>, p: IPicture) => {
    e.preventDefault();
    setSelectedPicture(p);
  };

  /**
   * handle click submit button in PictureEditor
   * @param e mouse event
   * @param p picture interface
   */
  const handleSubmit = (e: React.MouseEvent<HTMLElement>, p: IPicture) => {
    e.preventDefault();
    const submitForm = {
      title: titleValue || p.title,
      author: authorValue || p.author,
      publish: publishValue || p.publish,
      tags: tagsValue || p.tags,
      source: sourceValue || p.source,
      description: descValue || p.description,
      width: widthValue || p.width,
      height: heightValue || p.height,
      latitude: latitudeValue || p.latitude,
      longitude: longitudeValue || p.longitude,
      createAt: createAtValue || p.createAt,
      updateAt: updateAtValue || p.updateAt,
    };
    // console.log(submitForm);
    const uid = uidValue || p.uid;
    const confirm = window.confirm('submit?');
    if (confirm) {
      apiV2
        .put(`/picture?uid=${uid}`, submitForm)
        .then(res => {window.alert(res.data.msg); setAllUndefined();})
        .catch(err => window.alert(err.response.data.msg));
    }
  };

  /**
   * handle click [cancel] button in PictureEditor
   * @param e mouse event
   */
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setAllUndefined();
  };

  /**
   * handle click [prev] button under picture list
   * @param e mouse event
   */
  const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOffset(offset - pageLimit);
  };

  /**
   * handle click [next] button under picture list
   * @param e mouse event
   */
  const handleNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOffset(offset + pageLimit);
  };

  /**
   * render the picture item
   * @param p picture interface
   * @returns Picture Card with [edit] icon button
   */
  const renderItem = (p: IPicture) => (
    <Card width={260} height={210} p={p} onEdit={handleEdit} key={p.uid}>
      <Card.Img src={p.source} alt={p.title} key={p.uid} />
    </Card>
  );

  /**
   * render input element
   * @param value input value
   * @param onchange input onChange handler
   * @param defaultValue default input value
   * @param label label before input
   * @returns Input Element
   */
  const renderInput = (
    value: string | number,
    onchange: React.Dispatch<SetStateAction<string | number>>,
    defaultValue: string | number,
    label: string
  ) => {
    return (
      <Input
        label={label}
        value={value}
        onChange={e => onchange(e.target.value)}
        defaultValue={defaultValue}
        style={{width:350}}
      />
    );
  };

  /**
   * render Picture Editor
   * @param p picture interface
   * @returns Picture Editor element base on Dialog Components
   */
  const renderDialogContent = (p: IPicture) => {
    return (
      <DialogContent>
        <PictureForm>
          <img src={p.source} alt={p.title} style={{width:'60%',marginBottom:16}} />
          <Input
            label="UID"
            value={uidValue}
            onChange={e => setUidValue(e.target.value)}
            defaultValue={p.uid}
            style={{width:700}}
          />
          { renderInput(titleValue, setTitleValue, p.title, '图片标题') }
          { renderInput(authorValue, setAuthorValue, p.author, '拍摄者') }
          <Input
            label="图片描述"
            value={descValue}
            onChange={e => setDescValue(e.target.value)}
            defaultValue={p.description}
            style={{width:700}}
          />
          { renderInput(createAtValue, setCreateAtValue, p.createAt, '创建时间') }
          { renderInput(updateAtValue, setUpdateAtValue, p.updateAt, '更新时间') }
          <Input
            label="图片地址"
            value={sourceValue}
            onChange={e => setSourceValue(e.target.value)}
            defaultValue={p.source}
            style={{width:700}}
          />
          { renderInput(publishValue, setPublishValue, p.publish, '是否公开') }
          { renderInput(tagsValue, setTagsValue, p.tags, '图片标签') }
          { renderInput(widthValue, setWidthValue, p.width, '图片宽度') }
          { renderInput(heightValue, setHeightValue, p.height, '图片高度') }
          { renderInput(latitudeValue, setLatitudeValue, p.latitude, '纬度') }
          { renderInput(longitudeValue, setLongitudeValue, p.longitude, '经度') }
        </PictureForm>
        <div style={{width:'100%',textAlign:'center',marginTop:16,}}>
          <Button type="success" onClick={e => handleSubmit(e, p)}>提交</Button>
          <Button type="primary" onClick={handleCancel}>取消</Button>
        </div>
      </DialogContent>
    );
  };

  React.useEffect(() => {
    /**
     * 获取图片列表
     * offset: offset to the start
     * orderBy: ordered section
     * order: desc or asc
     */
    apiV2
      .get(`/pictures?limit=${pageLimit}&offset=${offset}&orderBy=createAt&order=desc`)
      .then(res => {
        setPictureList(res.data.data);
        // if offset plus page limitation is over totals
        // there is no more picture
        if (offset + pageLimit >= res.data.totals) setIsMoreNext(false);
        else setIsMoreNext(true);
      })
      .catch(err => window.alert(err.response.data.msg));
    
    // oppsiste, if offset is equals or under ZERO
    // this is the first page
    if (offset <= 0) setIsMorePrev(false);
    else setIsMorePrev(true);
  }, [offset]);

  return (
    <Wrapper>
      <Header>
        <Header.Title>Gallery</Header.Title>
        <Header.Add>
          <input type="file" onChange={e => {
            e.preventDefault();
            const file = e.target.files[0];
            console.log(file);
          }} />
        </Header.Add>
      </Header>
      <Container>
        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
          { pictureList ? pictureList.map(renderItem) : <Loading /> }
        </div>
        <div style={{textAlign:'center',marginTop:32,}}>
          <Button onClick={handlePrev} disabled={!isMorePrev}>Prev</Button>
          <Button onClick={handleNext} disabled={!isMoreNext}>Next</Button>
        </div>
      </Container>
      <Dialog
        title="图片编辑器"
        visible={selectedPicture ? true : false}
        width={800}
        height={850}
        animation="slide-top-down"
        onCancel={handleCancel}
      >
        { selectedPicture && renderDialogContent(selectedPicture) }
      </Dialog>
    </Wrapper>
  );
}
