import React, { useState } from 'react';
import styles from "./RoleMgt.module.css";
import "../../../Components/Dashboard/tablecomponent.css";
import TableTitle from './TableTitle';
import RoleMgtTable from './RoleMgtTable';
import CreateRoleButton from './CreateButton';
// import { useDispatch} from 'react-redux';
// import { loadRoles } from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.action';
// import { getToken } from '../../../_Helper/_Redux/Services/globalUtil';
// import roleMgtServices from '../../../_Helper/_Redux/redux/RoleManagement/roleManagement.services';
import EditForm from './EditForm';
import Popup from './Popup';
import DeleteConfirmation from './DeleteConfirmation';



const RoleMgtMainSect = ({ openModal, roles }) => {
  // console.log("RM SECT", roles)
  const [editMode, setEditMode] = useState(false);
  const [roleToEdit, setRoleToEdit] = useState({});
  const [idToEdit, setIdToEdit] = useState();
  const [deleteMode, setDeleteMode] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState({});



  return (
    <>
      {/* main section */}

      <section className={styles.contentarea}>
        <TableTitle />
        {/* new table style */}
        <RoleMgtTable roles={roles} setEditMode={setEditMode} setRoleToEdit={setRoleToEdit} setIdToEdit={setIdToEdit} />

        <CreateRoleButton openModal={openModal} />

        {editMode ? (<div>
          <div className={styles.blur} onClick={() => setEditMode(false)}>          </div>
          <EditForm roleToEdit={roleToEdit} setEditMode={setEditMode} idToEdit={idToEdit} />
        </div>)
          : null}


        {deleteMode ? <DeleteConfirmation deleteMode={deleteMode} setDeleteMode={setDeleteMode} roleToDelete={roleToDelete} setRoleToDelete={setRoleToDelete} /> : null}




      </section>
    </>
  )
}

export default RoleMgtMainSect