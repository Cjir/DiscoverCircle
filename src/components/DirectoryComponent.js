import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsite) {
        this.setState({ selectedCampsite: campsite });
    }

    renderSelectedCampsite(campsite) {
        if (campsite) {
            return (
                <div className="m-2 cardCampsite">
                <Card>
                    <CardImg className="campsiteImgFeed" top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="m-2">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg  src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle className="pl-2">{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">

                        <div>{directory}</div>
                    </div>
                    <div className="col-8">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>

            </div>
        );
    }
}

export default Directory;