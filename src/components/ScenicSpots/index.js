import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

import Spinner from '../Spinner';

import { useOnScrollToBottom } from '../../hooks';
import motcAPI from '../../api/motcAPI';
import { CITYS, SPOTS_PER_RENEW } from '../../constants';

export default function ScenicSpots() {
  const { city } = useParams();

  const [spotDatas, setSpotDatas] = useState([]);
  const [renewCount, setRenewCount] = useState(0);
  const [showSpinner, setShowSpinner] = useState(true);

  const getScenicSpotDatas = useCallback(async () => {
    const params = {
      $top: SPOTS_PER_RENEW,
      $skip: SPOTS_PER_RENEW * renewCount,
    };

    setShowSpinner(true);

    try {
      const { data } =
        city in CITYS
          ? await motcAPI.getCityScenicSpots(city, params)
          : await motcAPI.getAllScenicSpots(params);
      setShowSpinner(false);
      setSpotDatas((prevSpotDatas) => [...prevSpotDatas, ...data]);
    } catch (err) {
      console.error(err);
    }
  }, [city, renewCount]);

  useEffect(() => {
    getScenicSpotDatas();
  }, [getScenicSpotDatas]);

  useOnScrollToBottom(() => {
    setRenewCount(renewCount + 1);
  });

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>景點名稱</th>
            <th>景點特色精簡說明</th>
          </tr>
        </thead>
        <tbody>
          {spotDatas.map((spot, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <b>{spot.Name}</b>
                </td>
                <td>
                  {spot.Description || spot.DescriptionDetail}
                  {spot.Description &&
                    spot.Description !== spot.DescriptionDetail &&
                    '......'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {showSpinner && <Spinner relativeCenter={true} size="big" />}
    </>
  );
}
