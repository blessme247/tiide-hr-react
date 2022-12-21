import React from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import SideNav from './SideNav/SideNav'
import './tablecomponent.css'

function TableComponent() {
  return (
    <div className='tableplayground'>
      <SideNav />

      <table>
        <thead>
          <tr>
            <th>
              First Head
            </th>
            <th>
              Second Head
            </th>
            <th>
              Third Head
            </th>
            <th>
              Action Head
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 1</td>
            <td>Data 1</td>
            <td>
              <FaEdit className="edit" />
              <FaRegTrashAlt className="delete" />
            </td>
          </tr>
          <tr>
            <td>Data 2</td>
            <td>Data 2</td>
            <td>Data 2</td><td>
              <FaEdit className="edit" />
              <FaRegTrashAlt className="delete" />
            </td>
          </tr>
          <tr>
            <td>Data 3</td>
            <td>Data 3</td>
            <td>Data 3</td><td>
              <FaEdit className="edit" />
              <FaRegTrashAlt className="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent