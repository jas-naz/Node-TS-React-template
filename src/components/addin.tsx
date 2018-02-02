import * as React from "react";
import * as $ from "jquery";

import {Fabric} from 'office-ui-fabric-react/lib/Fabric';
import {DefaultButton, PrimaryButton, CompoundButton} from 'office-ui-fabric-react/lib/Button';
import {Dropdown, DropdownMenuItemType, IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';
import {Label} from 'office-ui-fabric-react/lib/Label';
import {Icon} from 'office-ui-fabric-react/lib/Icon';
import {initializeIcons} from '@uifabric/icons';

// import {Page} from './page';
import {Pagination} from './pagination';
import {Util} from './utilities';

// Register icons and pull the fonts from the default SharePoint cdn.
initializeIcons(); // ...or, register icons and pull the fonts from your own cdn:// initializeIcons('https://my.cdn.com/path/to/icons/');

export interface ISitesProps {
    data?: Array<any>,
    DEV?: boolean,
    disabled?: boolean,
    checked?: boolean
};

interface IMyWorkState {
    data?: Array<any>,
    DEV?: boolean
};

export class Addin extends React.Component<ISitesProps, IMyWorkState> {
    constructor(props : ISitesProps) {
        super(props);
        this.state = {
            data: this.props.data,
            DEV: this.props.DEV
        };
    }
    // firstLoad={ clientsites:"null",projsites:"null",documents:"null",collabsites:"null",conversations:"null",dashboard:"null" };

    // public componentWillUpdate() {
    //     // $(".conversations,.documents,.clients,.projects,.collaborationSites,.dashboard").hide();
    //     $(".tabs__content").hide();// to keep content from flashing
    // }
    
    public componentDidMount() {
        console.log("in componentDidMount");
        
        if (this.props.DEV) 
        {//DEV Testing
            setTimeout(() => { this.DevSites(); }, 500);
        }

        this.runClickFunction();
        
    }

    runClickFunction() {
        $(function () {
            $(".selector").click(function () {
                $(".selector").removeClass("selected");
                $(this).addClass("selected");
                // Pass this to page 2

                triggerAnimation(true);
            });
            $(".ms-Icon--ChevronLeftMed").click(function () {
                triggerAnimation(false);
                // Reset page-2
                $('input[type="radio"], input[type="checkbox"]').prop('checked', false);
            });
        });

        function triggerAnimation(tf: boolean){
            var panel1 = $('#page-1');
            var panel2 = $('#page-2');
            var backArrow = $('#back-arrow');

            // add animation // var cssClass = 'ms-u-slideRightIn40';
            var cssClass1 = 'slideLeftOff';
            var cssClass2 = 'slideLeftOn';

            if (tf) {
                panel1.addClass(cssClass1);
                panel2.addClass(cssClass2);
                backArrow.addClass(cssClass2);
            }
            else {
                panel1.removeClass(cssClass1);
                panel2.removeClass(cssClass2);
                backArrow.removeClass(cssClass2);
            }
            // disable events
            event.preventDefault();
        }
    }
    
    componentDidUpdate(prevProps : any, prevState : any) {
        console.log("in componentDidUpdate");
        this.runClickFunction();
    }

    DevSites() {
        this.setState({data: Util.getTestData()});
    }

    render() {        
        console.log("in Addin render");
        let { disabled, checked } = this.props;
        let sites = this.state.data;
        const siteCount = this.state.data.length > 15;

        return(
            <div className="addin">

                <div className="header">
                    <div id="back-arrow" className="back-arrow">
                        <i className="ms-Icon ms-Icon--ChevronLeftMed x-hidden-focus"></i>
                    </div> Application Heading
                </div>

                <div id="page-1" className="page-1 content">
                    <div className="page-header">Header of Page 1</div>
                    <div>Content here</div>

                    <div className="control-header">Select a Site</div>
                    <div className="more-sites">
                        {
                            sites.map((site:any,index:number)=>{
                                if (index < 15) {
                                    return (
                                        <div className="selector">{site.name} <i className="ms-Icon ms-Icon--ChevronRightMed x-hidden-focus"></i></div>
                                    );
                                }
                            })
                        }
                    </div>

                    {
                        siteCount &&
                        <div className="pagination">
                            <div className="disabled"><i className="ms-Icon ms-Icon--ChevronUpSmall x-hidden-focus"></i></div>
                            <div><i className="ms-Icon ms-Icon--ChevronDownSmall x-hidden-focus"></i></div>
                        </div>
                    }

                </div>

                <div id="page-2" className="page-2 content">
                    <div className="page-header">Page 2</div>
                
                    <div></div>
                    <Fabric><DefaultButton>I am a button.</DefaultButton></Fabric>
                    <Fabric>
                        <PrimaryButton
                        data-automation-id='test'
                        disabled={ disabled }
                        checked={ checked }
                        title='Let us bing!'
                        style={ { color: '#ffffff' } }
                        >
                        Bing
                        </PrimaryButton>
                    </Fabric>

                    <div className='ms-BasicButtonsExample'>
                        <PrimaryButton
                        data-automation-id='test'
                        disabled={ disabled }
                        checked={ checked }
                        title='Let us bing!'
                        style={ { color: '#ffffff' } }
                        >
                        Bing
                        </PrimaryButton>
                    </div>
                    
                </div>

            </div>
        );
    }
};
