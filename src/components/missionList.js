import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionList.module.css';

function MissionList({
  id, name, description, joined,
}) {
  return (
    <div>
      <tr key={id} className="row">
        <th>{name}</th>
        <td>{description}</td>
        <td>
          <span className={`status ${!joined ? '' : 'active'}`} />
        </td>
      </tr>
    </div>
  );
}

MissionList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionList;
