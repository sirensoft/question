/*
 Navicat PostgreSQL Data Transfer

 Source Server         : localhost_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 100002
 Source Host           : localhost:5432
 Source Catalog        : question
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100002
 File Encoding         : 65001

 Date: 13/02/2018 16:24:12
*/


-- ----------------------------
-- Sequence structure for answer_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."answer_id_seq";
CREATE SEQUENCE "public"."answer_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for topic_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."topic_id_seq";
CREATE SEQUENCE "public"."topic_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS "public"."answer";
CREATE TABLE "public"."answer" (
  "id" int4 NOT NULL DEFAULT nextval('answer_id_seq'::regclass),
  "topic_id" int4,
  "answer" json,
  "created" jsonb,
  "updated" jsonb
)
;

-- ----------------------------
-- Records of answer
-- ----------------------------
INSERT INTO "public"."answer" VALUES (20, 3, '{"name":"4578963000","lname":"556"}', NULL, NULL);
INSERT INTO "public"."answer" VALUES (21, 3, '{"name":"sdsdsd","lname":"sdsdsd","age":30}', NULL, NULL);
INSERT INTO "public"."answer" VALUES (22, 3, '{"name":"อุเทน","lname":"จาดยางโทน","age":23,"sex":1,"bp":"120/80"}', NULL, NULL);
INSERT INTO "public"."answer" VALUES (23, 3, '{"name":"ปวินวัฒน์","lname":"สุขเกษม","age":35,"sex":1,"bp":"125/75"}', NULL, NULL);
INSERT INTO "public"."answer" VALUES (24, 3, '{"name":"dfdfdf","lname":"fggfgfgfgg"}', NULL, NULL);
INSERT INTO "public"."answer" VALUES (25, 3, '{"name":"dddd","lname":"ffffff","choice":["bar","fuzz"]}', NULL, NULL);
INSERT INTO "public"."answer" VALUES (26, 3, '{"name":"sdsd","lname":"sddd","age":20,"sex":1,"bp":"120/80","choices":[2,3]}', NULL, NULL);

-- ----------------------------
-- Table structure for topic
-- ----------------------------
DROP TABLE IF EXISTS "public"."topic";
CREATE TABLE "public"."topic" (
  "id" int4 NOT NULL DEFAULT nextval('topic_id_seq'::regclass),
  "topic" json,
  "created" jsonb,
  "updated" jsonb
)
;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO "public"."topic" VALUES (2, '{
"id":"2", "title": "ตอบคำถามสุขภาพ",
  "description": "โปรดกรอกข้อมูล",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
}', NULL, NULL);
INSERT INTO "public"."topic" VALUES (1, '{
"id":"1",  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
}', NULL, NULL);
INSERT INTO "public"."topic" VALUES (6, '{
  "id": "3",
  "title": "สำรวจผู้สูงอายุ",
  "description": "ตามนโยบายกระทรวงสาธารณสุข",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "ชื่อ"
    },
    "lname": {
      "type": "string",
      "title": "นามสกุล"
    },
    "age": {
      "type": "integer",
      "title": "อายุ(ปี)"
    },
    "sex": {
      "title": "เพศ",
      "type": "number",
      "enum": [
        1,
        2
      ],
      "enumNames": [
        "ชาย",
        "หญิง"
      ]
    },
    "bp": {
      "title": "ความดันวัดที่บ้าน",
      "type": "string"
    },
    "choices": {
      "title": "เมือง",
      "type": "array",
      "items": {
        "type": "integer",
        "enum": [
          1,
          2,
          3
        ],
        "enumNames": [
          "New York",
          "California",
          "Dallas"
        ]
      },
      "uniqueItems": true
    }
  },
  "required": [
    "name",
    "lname"
  ]
}', NULL, NULL);
INSERT INTO "public"."topic" VALUES (3, '{
  "id": "3",
  "title": "สำรวจผู้สูงอายุ",
  "description": "ตามนโยบายกระทรวงสาธารณสุข",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "ชื่อ"
    },
    "lname": {
      "type": "string",
      "title": "นามสกุล"
    },
    "age": {
      "type": "integer",
      "title": "อายุ(ปี)"
    },
    "sex": {
      "title": "เพศ",
      "type": "number",
      "enum": [
        1,
        2
      ],
      "enumNames": [
        "ชาย",
        "หญิง"
      ]
    },
    "bp": {
      "title": "ความดันวัดที่บ้าน",
      "type": "string"
    }
  },
  "required": [
    "name",
    "lname"
  ]
}', NULL, NULL);

-- ----------------------------
-- Function structure for uuid_generate_v1
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v1mc
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v1mc"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v1mc"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v1mc'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v3
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v3"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v3"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v3'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v4
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v4"();
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v4"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v4'
  LANGUAGE c VOLATILE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_generate_v5
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_generate_v5"("namespace" uuid, "name" text);
CREATE OR REPLACE FUNCTION "public"."uuid_generate_v5"("namespace" uuid, "name" text)
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_generate_v5'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_nil
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_nil"();
CREATE OR REPLACE FUNCTION "public"."uuid_nil"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_nil'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_dns
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_dns"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_dns"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_dns'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_oid
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_oid"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_oid"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_oid'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_url
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_url"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_url"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_url'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Function structure for uuid_ns_x500
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."uuid_ns_x500"();
CREATE OR REPLACE FUNCTION "public"."uuid_ns_x500"()
  RETURNS "pg_catalog"."uuid" AS '$libdir/uuid-ossp', 'uuid_ns_x500'
  LANGUAGE c IMMUTABLE STRICT
  COST 1;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."answer_id_seq"
OWNED BY "public"."answer"."id";
SELECT setval('"public"."answer_id_seq"', 27, true);
ALTER SEQUENCE "public"."topic_id_seq"
OWNED BY "public"."topic"."id";
SELECT setval('"public"."topic_id_seq"', 7, true);

-- ----------------------------
-- Primary Key structure for table answer
-- ----------------------------
ALTER TABLE "public"."answer" ADD CONSTRAINT "answer_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table topic
-- ----------------------------
ALTER TABLE "public"."topic" ADD CONSTRAINT "topic_pkey" PRIMARY KEY ("id");
