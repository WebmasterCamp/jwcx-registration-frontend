import React, { Component } from 'react';

export default class StepList extends Component {

    styles = {
        waitingCircle: {
            borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 22,
            borderStyle: 'solid',
            width: 44,
            height: 44,
            backgroundColor: '#5e4a88',
        },
        doingCircle: {
            borderColor: '#ffcf4a',
            borderWidth: 2,
            borderRadius: 22,
            borderStyle: 'solid',
            width: 44,
            height: 44,
            backgroundColor: '#5e4a88',
        },
        doneCircle: {
            borderColor: '#ffffff',
            borderWidth: 2,
            borderRadius: 22,
            borderStyle: 'solid',
            width: 44,
            height: 44,
            backgroundColor: '#ffcf4a',
        },
        stepsListContainer: {
            display: 'flex',
            width: '100%',
        },
        stepsListInner: {
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        stepsListColumn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',            
        },
    }
    
    render() {
        return (
            <div style={this.props.style} className={this.props.className} >
                <div style={this.styles.stepsListContainer} >
                    <div style={this.styles.stepsListInner} >
                        {this.props.titles.map((title, index) => (
                            <div key={index} style={this.styles.stepsListColumn} >
                                {this.props.currentStep < index && <div style={this.styles.waitingCircle} />}
                                {this.props.currentStep === index && <div style={this.styles.doingCircle} />}
                                {this.props.currentStep > index && <div style={this.styles.doneCircle} />}
                                <div>{title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
