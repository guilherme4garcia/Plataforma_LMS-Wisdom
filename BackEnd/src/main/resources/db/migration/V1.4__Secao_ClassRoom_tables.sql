DROP TABLE IF EXISTS "Secao" ;

CREATE TABLE IF NOT EXISTS "Secao" (
  "idSecao" SERIAL PRIMARY KEY,
  "nomeSecao" VARCHAR(45) NOT NULL,
  "descricao" VARCHAR(50) NOT NULL,
  "informacoes" VARCHAR(255) NOT NULL,
  "idCurso_fk" INT NOT NULL,
  CONSTRAINT "fk_Secao_Curso1"
    FOREIGN KEY ("idCurso_fk")
    REFERENCES "Curso" ("idCurso")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


DROP TABLE IF EXISTS "SaladeAula" ;

CREATE TABLE IF NOT EXISTS "SaladeAula" (
  "idSaladeAula" SERIAL PRIMARY KEY,
  "nomeSaladeAula" VARCHAR(45) NOT NULL,
  "conteudo" VARCHAR(45) NOT NULL,
  "idUsuario_fk" INT NOT NULL);