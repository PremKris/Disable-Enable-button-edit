namespace pk;

entity parent{
    key p_id : Integer;
    p_name : String;
    p_age : Integer;
}

entity child{
    key c_id : UUID;
    p_id : String;
    c_name : String;
    c_age : Integer;
}   