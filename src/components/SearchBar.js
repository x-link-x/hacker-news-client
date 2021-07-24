import React from "react";
import { Form, Button} from "react-bootstrap";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import "../SearchBar.css"

const SearchBar = ({query, updateQuery}) => {
    
    const handleChange = (e) => {
        e.preventDefault()
        updateQuery(e.target.value)
    }

    return (
        
            <Accordion>
                <AccordionSummary>
                    <Typography className="search">Search</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Form className="form">
                        <Form.Label htmlFor="article-search">
                            <span className="visually-hidden">Search Articles</span>
                        </Form.Label>
                        <Form.Control
                            key="le39sdj"
                            type="text"
                            id="article-search"
                            placeholder="Search Articles"
                            value={query}
                            onChange={handleChange}
                            size="lg"
                        />
                        <Button variant="primary" type="submit" id="back-button">Back</Button>
                    </Form>
                </AccordionDetails>
            </Accordion>
    )
}

export default SearchBar;