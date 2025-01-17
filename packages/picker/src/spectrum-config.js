/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const config = {
    spectrum: 'picker',
    components: [
        {
            name: 'picker',
            host: {
                selector: '.spectrum-Picker',
                shadowSelector: '#button',
            },
            attributes: [
                {
                    type: 'boolean',
                    selector: '.spectrum-Picker--quiet',
                },
                {
                    type: 'boolean',
                    selector: '.is-disabled',
                    name: 'disabled',
                },
                {
                    type: 'boolean',
                    selector: '.is-invalid',
                    name: 'invalid',
                },
                {
                    type: 'boolean',
                    selector: '.is-open',
                    name: 'open',
                },
                {
                    type: 'boolean',
                    selector: '.is-focused',
                    name: 'focused',
                },
                {
                    type: 'enum',
                    name: 'size',
                    forceOntoHost: true,
                    values: [
                        {
                            name: 's',
                            selector: '.spectrum-Picker--sizeS',
                        },
                        {
                            name: 'm',
                            selector: '.spectrum-Picker--sizeM',
                        },
                        {
                            name: 'l',
                            selector: '.spectrum-Picker--sizeL',
                        },
                        {
                            name: 'xl',
                            selector: '.spectrum-Picker--sizeXL',
                        },
                    ],
                },
            ],
            classes: [
                {
                    selector: '.spectrum-Picker-menuIcon',
                    name: 'picker',
                },
                {
                    selector: '.spectrum-Menu-checkmark',
                    name: 'checkmark',
                },
                {
                    selector: '.is-placeholder',
                    name: 'placeholder',
                },
                {
                    selector: '.spectrum-Picker-validationIcon',
                    name: 'validationIcon',
                },
                {
                    selector: '.spectrum-Picker-icon',
                    name: 'icon',
                },
            ],
            ids: [
                {
                    selector: '.spectrum-Picker-trigger',
                    name: 'button',
                },
                {
                    selector: '.spectrum-Picker-label',
                    name: 'label',
                },
                {
                    selector: '.spectrum-Picker-popover',
                    name: 'popover',
                },
            ],
        },
    ],
};

export default config;
