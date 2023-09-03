import React, {useState, useEffect} from 'react'
import Button from '../../presentationals/button/button'
import { Box, Stack, Typography } from '@mui/material';
import Table from '../../presentationals/table/table';
import { buttonVariant, buttonType} from '../../../common/constants'

function Brand() {
  const [brands, setBrands] = useState([]); 
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');

  useEffect (() => {  
    
    setBrands(rows)
  }, [])


  const handleAddClick = (brand) => { 
    console.log('Add Click')
    alert('Add Click')
  }

  const handleDeleteClick = (brand) => { 
    console.log('Delete Click')
    alert('Delete Click')
  }

  const handleEditClick = (brand) => {
    console.log(brand, 'Edit Click')
    alert('Edit Click')
  }

  const handleFilterClick = (brand) => { 
    console.log('Filter Click')
    alert('Filter Click')
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

  return (
    <>
     <Box sx={{ display: 'flex',  m: 1  }}>
        <Typography variant="h5" fontWeight="bold" component="div" sx={{ flexGrow: 1, color: "#616161" }}>Manage Brand</Typography>
        <Stack direction='row' spacing={2}>
          <Button 
            text='Add' 
            type={buttonType.add}
            variant={buttonVariant.contained}
            onClick={handleAddClick}
          />
        </Stack>
      </Box>
      <Table 
        headerCells={headerCells}
        label="brand"
        numberSelected={selected.length}
        order={order}
        orderBy={orderBy}
        onDeleteClick={handleDeleteClick}
        onFilterClick={handleFilterClick}
        onEditClick={handleEditClick}
        onRowClick={handleRowClick}
        onSelectAllClick={handleSelectAllClick}
        rowCount={brands.length}
        rows={brands}
        selected={selected}
        tableOnly={false}
        tableTitle="Brand List"
      />
    </>
   
  )
}

export default Brand


function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('1','Cupcake', 305, 3.7, 67, 4.3),
  createData('2','Donut', 452, 25.0, 51, 4.9),
  createData('3','Eclair', 262, 16.0, 24, 6.0),
  createData('4','Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('5','Gingerbread', 356, 16.0, 49, 3.9),
  createData('6','Honeycomb', 408, 3.2, 87, 6.5),
  createData('7','Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('8','Jelly Bean', 375, 0, 94, 1),
  createData('9','KitKat', 518, 26.0, 65, 7.0),
  createData('10','Lollipop', 392, 0.2, 98, 0),
  createData('11','Marshmallow', 318, 0, 81, 2.0),
  createData('12','Nougat', 360, 19.0, 9, 37.0),
  createData('13','Oreo', 437, 18.0, 63, 4.0),
];


const headerCells = [
  {
    id: 'id',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];