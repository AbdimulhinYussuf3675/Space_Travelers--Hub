import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionList.module.css';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from 'features/Mission/mission';

function MissionList({
  id, name, description, joined,
}) {
  const dispatch = useDispatch();
  const joinBtn = (event) => {
    if (event.target.textContent === 'Join Mission') {
      dispatch(joinMission(event.target.id));
    }
    if (event.target.textContent === 'Leave Mission') {
      dispatch(leaveMission(event.target.id));
    }
  };
  return (
    <>
      <tr key={id} className="row">
        <th>{name}</th>
        <td>{description}</td>
        <td>
          <span className={`status ${!joined ? '' : 'active'}`}>
            {!joined ? 'Not a member' : 'Active member'}
          </span>
        </td>

        <td>
          {' '}
          <button
            id={id}
            type="button"
            onClick={joinBtn}
            className={`joined-btn ${!joined ? '' : 'leave-btn'}`}
          >
            {!joined ? 'Join Mission' : 'Leave Mission'}
          </button>
          {' '}
        </td>
      </tr>
    </>
  );
}

MissionList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionList;
