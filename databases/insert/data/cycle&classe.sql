
TRUNCATE app.cycles CASCADE;
TRUNCATE app.classes CASCADE;

INSERT INTO app.cycles(type) VALUES 
('1er cycle'),
('2nd cycle'),
('Licence'),
('Master');


INSERT INTO app.classes(nom, cycle) 
    SELECT start_arr[ index ] classe, 
        CASE 
            WHEN index BETWEEN 1 AND 4 THEN 1
            WHEN index BETWEEN 5 AND 7 THEN 2
            WHEN index BETWEEN 8 AND 10 THEN 3
            WHEN index BETWEEN 11 AND 12 THEN 4
        END
            AS cycle

    FROM
        (SELECT '{6eme,5eme,4eme,3eme,2nd,1ere,tle,L1,L2,L3,M1,M2}'::TEXT[] AS start_arr) edy, 
        generate_series(1,12) AS INDEX
;
