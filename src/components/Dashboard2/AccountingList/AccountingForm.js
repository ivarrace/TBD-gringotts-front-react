import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import IconButton from "@mui/material/IconButton";

const defaultAccountingValues = {
  id: "",
  name: "",
  summary: null,
  expenses: [],
  income: [],
};

const defaultCategoryValues = {
  id: "",
  name: "",
  groups: [],
};

const defaultGroupValues = {
  id: "",
  name: "",
};

export default function AccountingForm({
  accounting,
  toggleForm,
  saveAccountingHandler,
  deleteAccountingHandler,
}) {
  const [formValues, setFormValues] = React.useState(
    accounting ? accounting : defaultAccountingValues
  );
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function saveAccounting() {
    saveAccountingHandler(formValues);
    toggleForm(null);
  }

  function deleteAccounting() {
    if (formValues.id) {
      if (window.confirm("Are you sure you wish to delete this item?")) {
        deleteAccountingHandler(formValues.id);
        toggleForm(null);
      }
    }
  }

  function addCategory(name) {
    let newCategory = {
      ...defaultCategoryValues,
      id: Math.floor(Math.random() * 100000),
      name: name,
    };
    setFormValues({
      ...formValues,
      expenses: [...formValues.expenses, newCategory],
    });
    console.log(newCategory);
  }

  function addGroup(name, categoryId) {
    let newGroup = {
      ...defaultGroupValues,
      id: Math.floor(Math.random() * 100000),
      name: name,
    };
    console.log(newGroup);
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex" }}>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {accounting == null ? "New accounting" : "Edit accounting"}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="name"
                      name="name"
                      label="Name"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={handleInputChange}
                      defaultValue={formValues.name}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Expenses
                    </Typography>
                    {formValues.expenses.map((category) => (
                      <Accordion
                        key={category.id}
                        expanded={expanded === category.id}
                        onChange={handleChange(category.id)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography>{category.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {category.groups.map((group) => (
                            <Typography key={group.id}>{group.name}</Typography>
                          ))}
                          <TextField
                            sx={{ flexShrink: 0 }}
                            id={category.id + "_new_group"}
                            fullWidth
                            variant="standard"
                            defaultValue="New group"
                            InputProps={{
                              endAdornment: (
                                <IconButton
                                  color="primary"
                                  onClick={(event) =>
                                    addGroup("Test", category.id)
                                  }
                                >
                                  <AddIcon />
                                </IconButton>
                              ),
                            }}
                          />
                        </AccordionDetails>
                      </Accordion>
                    ))}
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item sm={11}>
                        <TextField
                          //sx={{ flexShrink: 0 }}
                          id="new_expense_category"
                          placeholder="New expenses category"
                          fullWidth
                          variant="standard"
                          /*InputProps={{
                            endAdornment: (
                              <IconButton
                                color="primary"
                                onClick={(event) => addCategory("Test")}
                              >
                                <AddIcon />
                              </IconButton>
                            ),
                          }}*/
                        />
                      </Grid>
                      <Grid sm={1}>
                        <IconButton
                          aria-label="add"
                          onClick={() => alert("add")}
                        >
                          <SaveIcon fontSize="inherit" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                      Income
                    </Typography>
                    {formValues.income.map((category) => (
                      <Accordion
                        key={category.id}
                        expanded={expanded === category.id}
                        onChange={handleChange(category.id)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {category.name}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {category.groups.map((group) => (
                            <Typography key={group.id}>{group.name}</Typography>
                          ))}
                          <TextField
                            sx={{ flexShrink: 0 }}
                            id={category.id + "_new_group"}
                            fullWidth
                            variant="standard"
                            defaultValue="New group"
                          />
                        </AccordionDetails>
                      </Accordion>
                    ))}
                    <TextField
                      sx={{ flexShrink: 0 }}
                      id="new_income_category"
                      fullWidth
                      variant="standard"
                      defaultValue="New category"
                    />
                  </Grid>
                </Grid>

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}
                >
                  <Button onClick={() => toggleForm(null)} color="secondary">
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={saveAccounting}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={deleteAccounting}
                    color="secondary"
                  >
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
