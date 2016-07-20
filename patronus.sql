CREATE TABLE "patronuses" (
    "patronus_id" serial NOT NULL,
    "patronus_name" varchar(20),
    PRIMARY KEY ("patronus_id")
);

CREATE TABLE "people" (
    "person_id" serial NOT NULL,
    "first_name" varchar(20),
    "last_name" varchar(20),
    "patronus_id" int REFERENCES patronuses(patronus_id),
    PRIMARY KEY ("person_id")
);

INSERT INTO "patronuses"("patronus_name") VALUES('tiger');

INSERT INTO "people"("first_name", "last_name", "patronus_id") VALUES('Tracy', 'Vincent', 1);

INSERT INTO "patronuses"("patronus_name") VALUES('horse');

INSERT INTO "people"("first_name", "last_name", "patronus_id") VALUES('Cormac', 'Strahan', 2);

INSERT INTO "patronuses"("patronus_name") VALUES('jack russell terrier');

INSERT INTO "people"("first_name", "last_name", "patronus_id") VALUES('Trent', 'Johnson', 3);
