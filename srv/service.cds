using pk from '../db/schema';

service premk {
    @odata.draft.enabled
    entity parent as projection on pk.parent;
    entity child as projection on pk.child;

}

