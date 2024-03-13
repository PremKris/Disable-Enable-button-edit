using premk as service from '../../srv/service';

annotate service.parent with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'p_name',
            Value : p_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'p_age',
            Value : p_age,
        },
    ]
);
annotate service.parent with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'p_name',
                Value : p_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'p_age',
                Value : p_age,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
