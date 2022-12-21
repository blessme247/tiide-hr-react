import { useSelector } from 'react-redux';
import styles from './levelmanagement.module.css'
import LevelManagementItems from './LevelManagementItems'

function LevelmanagementTable({ setEditMode, setLevelToEdit, setIdToEdit }) {
  // const dispatch = useDispatch();

  const { allLevels } = useSelector((state) => state.LevelManagementStore);

  // console.log(typeof allLevels, "from lmt" )

  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.td}>
                Level
              </th>
              <th className={styles.td}>
                Description
              </th>
              <th className={styles.td}>
                {/* Salary <span>per month</span> (<span id="selectCurrency"></span>) */}
                Salary <span>per month</span> (₦)
              </th>
              <th className={styles.td}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {/* {displayLevels} */}
            {allLevels || allLevels.length ? allLevels.map((level, index) => {

              return <LevelManagementItems
                key={index}
                index={index + 1}
                setIdToEdit={setIdToEdit}
                level={level}
                setEditMode={setEditMode}
                setLevelToEdit={setLevelToEdit}
              />
            }) : "No levels to load"}

          </tbody>
        </table>
      </div>
    </>
  )

}

export default LevelmanagementTable