import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1a653e997ea544028fb911a54786c37b'
                    }
                    'food-app-1': {
                        table: 'x_snc_forrester_co_food_item'
                        id: 'ba8dcc4b12634805878b54009fdd2e2f'
                    }
                    'food-app-2': {
                        table: 'x_snc_forrester_co_food_item'
                        id: '2e08a15e5d52475f8ef03c69cc23c37a'
                    }
                    'food-app-3': {
                        table: 'x_snc_forrester_co_food_item'
                        id: 'f63839d7f1b54740b443aad09f96ccb9'
                    }
                    'food-bev-1': {
                        table: 'x_snc_forrester_co_food_item'
                        id: '79f017f096a848a692032145cbd434de'
                    }
                    'food-bev-2': {
                        table: 'x_snc_forrester_co_food_item'
                        id: 'e44d2586b8bd4b40acd11d0c7945fa94'
                    }
                    'food-dessert-1': {
                        table: 'x_snc_forrester_co_food_item'
                        id: 'bdf412fb10804323a05e67486b6f6a04'
                    }
                    'food-main-1': {
                        table: 'x_snc_forrester_co_food_item'
                        id: 'b4bcbc63c9b247b3b9046af50fea9f5e'
                    }
                    'food-main-2': {
                        table: 'x_snc_forrester_co_food_item'
                        id: 'c5de836ff6894795a187adf2048b2e66'
                    }
                    'food-snack-1': {
                        table: 'x_snc_forrester_co_food_item'
                        id: '16a8edeac39b414781ecbdfe80ece953'
                    }
                    'forrester-food-page': {
                        table: 'sys_ui_page'
                        id: '0c01990a97ab44af8621f43d04989045'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '917d842b79394492a7ef2f0551431a65'
                    }
                    'x_snc_forrester_co/main': {
                        table: 'sys_ux_lib_asset'
                        id: '399709b4b829404e8c562ce14e55e976'
                    }
                    'x_snc_forrester_co/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'f3586adddfa743cdb6b115f804cbb049'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '01ffbd227e3b45848ff3ad103850be4e'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'available'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04fb531b47fe461e941af05df71dcfa8'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'customer_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08c3de5ef4484e3d80dc85ace3832666'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'spice_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0cf49aaf940947d8a0e2d5c71abfc308'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'order_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0e06b4c178f6480c8048822d6a4daaf5'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'customer_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '145af1395ad84ce68471b3616f76b528'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'order_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15f7b28801aa4a0a9f1b9e0f05de7aba'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'price'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18979bfcb50146dcb1c0bfe9c72da93f'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            value: 'confirmed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21654cc81b324a6ca5088bc3df8315e6'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23ef7a95d24245809dac878292e91471'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ab7d28a19ae469ba5db767c8afd30e8'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'special_instructions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c360981e5ee4a4a933fc7ebe850f0fb'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'customer_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '449bd7263d4d4f33ac7136d876cbf552'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'spice_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4aa6c73cd3e94872aa53782d978b958e'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'spice_level'
                            value: 'hot'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4aeee92a153f4d09b79c20406e1b20d8'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                            value: 'dessert'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b57bb659dcc41d69024273e9e09e281'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            value: 'delivered'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b93a63f8e534847904b3fbead2bd295'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'available'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f4d7bcefd9f4998b35e8cd3ab0a2780'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                            value: 'beverage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52d0f543f64f41a5a58ff677d26507a0'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '532d3a61996b47e5b5ef0f64a1ff0c0e'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'pickup_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65374922548946c58c278a18820135e4'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'table_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6bc46c05cc534c2299a43790fb4016fc'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '72645008f54a463cb32c589c02cc5087'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7620e8a37cb44200a8f020556b1df031'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78225309cc1e4f98b2e65dec52f8b83a'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                            value: 'snack'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7c5918ff44b943afb140c0bf82d1e83f'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                            value: 'appetizer'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8031cf5bcc334ed69829aa928784227d'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89e79f2c2c2045c0ae17a026b19704ab'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'customer_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a33250527474f52bbf20c3f14b48975'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'spice_level'
                            value: 'mild'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fe0a75189c74ae0af9e677f86cc2633'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'order_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93d85d6516a9489e8a90d0f8e0c3aa78'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '998557360ec643649ffb840d4cada19f'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e930df765bb48419a1f4831920706cd'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a39ec054f14544b88ce289d65fb05baf'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'total_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a564ecf8a9e34c8ba6e3c8a1bb2ba1cf'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aa8677cf792842108618bdf94ec626ec'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                            value: 'main_course'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aad26f66db7040129298162f2870bdbb'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            value: 'ready'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ace179123c254005af1edb4c4d7c9888'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'table_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b10f33053d0b4f5f9d10c55d655a78ef'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'image_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3df6488a6024b4e8a3a72b6f57b27b7'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'customer_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b48cb5943a414da9a24146cac390fec9'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'dietary_info'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8d5bd53dd5b4a7eb07e33ea55cd1d34'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'pickup_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba89177c2e4141cd8c71ae67ec6b86fb'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd46695e387f401eab6967b76ee3c2cd'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bec89370137d424689e4ad37ae394701'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'special_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c070f9ba18d64ecfabc0ed03e8c0aed0'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0a3e3bfeb394c6bb635c8ec5eac92b3'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'image_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c836760d15d0482c8f99668f79dfe844'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'customer_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca96b29f01ee49568c880c9c8799c19e'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ce9aa3c74254487a9e3f0274081041cf'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'dietary_info'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd93e76d125a947769331b8bc68ddf7fd'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'spice_level'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'da7f543864324f73901442c2f1635740'
                        key: {
                            category: 'x_snc_forrester_co_food_order'
                            prefix: 'FO'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'daeba7f2f56646cea6ed7af6a7b33dea'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e150b5ee5bf54a988fb48c42ab37f89a'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'order_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7b053741a9c4d87b26611949bd0bb89'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e96ad9828a2f4c88b0d22ab1dd613697'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'price'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f11bbb4ca82146e4bc6b69a4bd1227c1'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'status'
                            value: 'preparing'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f451eb5b1baf4079b9e75fb1a046aa2c'
                        key: {
                            name: 'x_snc_forrester_co_food_order'
                            element: 'total_amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f484b35b6b6043a988cb3836e2265c7b'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fdb827ce3f4b44d0a2821131e49d6b9a'
                        key: {
                            name: 'x_snc_forrester_co_food_item'
                            element: 'spice_level'
                            value: 'extra_hot'
                        }
                    },
                ]
            }
        }
    }
}
