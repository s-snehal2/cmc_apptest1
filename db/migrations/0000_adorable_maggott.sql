CREATE TABLE "profile" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"auth_id" uuid NOT NULL,
	"fname" text NOT NULL,
	"lname" text NOT NULL,
	"email" text NOT NULL,
	"mobile_no" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	CONSTRAINT "profile_auth_id_unique" UNIQUE("auth_id")
);
