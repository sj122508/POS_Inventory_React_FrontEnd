import React, {useState, useEffect} from 'react'
import Button from '../../presentationals/button/button'
import { Box, Stack, Typography } from '@mui/material';
import Table from '../../presentationals/table/table';
import Skeleton from '../../presentationals/skeleton/skeleton';
import { buttonVariant, buttonType, flexDirections, skeletonSizes, skeletonTypes} from '../../../common/constants'
import Modal from '../../presentationals/modal/modal';
import AddBrand from './Add/addBrand';
import EditBrand from './Edit/editBrand';

function Brand() {
  const [loading, setLoading] = useState(true)
  const [brand, setBrand] = useState({})
  const [brands, setBrands] = useState([]); 
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  

  useEffect (() => {  
    setTimeout(() => {
            setLoading(false)
        }, 5000)
    setBrands(rows)
  }, [])


  const handleAddClick = (addBrand) => { 
    setOpenAddModal(true);
  }

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  }

  const handleSubmit = (addBrand) => {
    setOpenAddModal(false);
  }

  const handleChangePage = (event, newPage) => {
    console.log('Change Page')
    alert('Change Page')
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value,));
    setPage(0);
  }

  const handleDeleteClick = (deleteBrand) => { 
    console.log('Delete Click')
    alert('Delete Click')
  }

  const handleEditClick = (editBrand) => {
    setBrand(editBrand);
    setOpenEditModal(true);
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  }

  const handleSaveEdit = (editBrand) => {
    setOpenEditModal(false);
  }

  const handleFilterClick = (filterBrand) => { 
    setOpenFilterModal(true);
  }

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false);
  }

  const handleRowClick = (event, id) => {
    console.log(id, 'ididididid')
    let modifiedSelectedBrands = []

    if (event.target.checked){
      const selectedBrand = brands.find(brand => brand.id === id)
      modifiedSelectedBrands = [...selected, selectedBrand]
      setSelected(modifiedSelectedBrands)
    }
    else{
      modifiedSelectedBrands = selected.filter(brand => brand.id !== id)
      setSelected(modifiedSelectedBrands)
    }
    
    
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = brands.map((brand) => brand);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  const handleSortClick = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    console.log(property,'Sort Click')
  }

  const pageHeader = () => {
    return (
      <Box sx={{ display: 'flex',  m: 1  }}>
        {loading ? 
        <>
          <Skeleton size={skeletonSizes.medium} type={skeletonTypes.text} />
          <Skeleton size={skeletonSizes.medium} type={skeletonTypes.text} flexDirection={flexDirections.rowReverse}/>
        </> : 
        <>
          <Typography variant="h5" fontWeight="bold" component="div" sx={{ flexGrow: 1, color: "#616161" }}>Manage Brand</Typography>
          <Stack direction='row' spacing={2}>
            <Button 
              text='Add' 
              type={buttonType.add}
              variant={buttonVariant.contained}
              onClick={handleAddClick}
            />
          </Stack>
        </>
      }
      </Box>
    ) 
  }

  return (
    <>
     {pageHeader()}
      <Table 
        headerCells={headerCells}
        label="brand"
        isLoading={loading} 
        numberSelected={selected.length}
        order={order}
        orderBy={orderBy}
        onDeleteClick={handleDeleteClick}
        onEditClick={handleEditClick}
        onFilterClick={handleFilterClick}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        onRowClick={handleRowClick}
        onSelectAllClick={handleSelectAllClick}
        onSortClick={handleSortClick}
        page={page}
        rowCount={brands.length}
        rowsPerPage={rowsPerPage}
        rows={brands}
        selected={selected}
        tableOnly={false}
        tableTitle="Brand List"
      />
      <AddBrand open={openAddModal} handleClose={handleCloseAddModal} handleSubmit={handleSubmit}/>

      <EditBrand open={openEditModal} handleClose={handleCloseEditModal} handleSaveEdit={handleSaveEdit} brand={brand}/>

      <Modal open={openFilterModal} title="Filter Brand" buttonLabel="Apply Filter" handleClose={handleCloseFilterModal}>
        <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
      </Modal>
    </>
   
  )
}

export default Brand


function createData(id, code, name, createdBy, createdDate, updatedBy, updatedDate) {
  return {
    id, code, name, createdBy, createdDate, updatedBy, updatedDate
  };
}

const rows = [
  createData('1','SAM', 'Samsung', 'James', 'October 6, 2023 10:56AM', 'James', 'October 6, 2023 10:56AM'),
  createData('1','APL', 'Apple', 'James', 'October 5, 2023 10:56AM', 'James', 'October 5, 2023 10:56AM'),
  createData('1','NOK', 'Nokia', 'James', 'October 1, 2023 10:56AM', 'James', 'October 1, 2023 10:56AM'),
  createData('1','SON', 'Sony', 'James', 'October 6, 2023 10:56AM', 'James', 'October 6, 2023 10:56AM'),
  createData('1','PAN', 'Panasonic', 'James', 'October 2, 2023 10:56AM', 'James', 'October 2, 2023 10:56AM'),
  createData('1','SHA', 'Sharp', 'James', 'October 5, 2023 10:56AM', 'James', 'October 5, 2023 10:56AM'),
  createData('1','PHI', 'Philips', 'James', 'October 6, 2023 10:56AM', 'James', 'October 6, 2023 10:56AM'),
  createData('1','XIA', 'Xiaomi', 'James', 'October 2, 2023 10:56AM', 'James', 'October 2, 2023 10:56AM'),
  createData('1','HUA', 'Huawei', 'James', 'October 6, 2023 10:56AM', 'James', 'October 6, 2023 10:56AM'),
  createData('1','CAN', 'Canon', 'James', 'October 3, 2023 10:56AM', 'James', 'October 3, 2023 10:56AM'),
];


const headerCells = [
  {
    id: 'id',
  },
  {
    id: 'brandCode',
    numeric: false,
    disablePadding: true,
    label: 'Brand Code',
  },
  {
    id: 'brandName',
    numeric: false,
    disablePadding: true,
    label: 'Brand Name',
  },
  {
    id: 'createdBy',
    numeric: false,
    disablePadding: true,
    label: 'Created By',
  },
  {
    id: 'createdDate',
    numeric: false,
    disablePadding: false,
    label: 'Created Date',
  },
  {
    id: 'updatedBy',
    numeric: false,
    disablePadding: true,
    label: 'Updated By',
  },
  {
    id: 'updatedDate',
    numeric: false,
    disablePadding: false,
    label: 'Updated Date',
  },
];