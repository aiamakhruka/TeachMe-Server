
  exports.up = function(knex) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('email', 255).notNullable();
        table.string('role', 255).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      })
      .createTable('teachers', function (table) {
        // table.increments('id').unsigned().primary();
        table.integer('teacher_id').unsigned().primary();
        table.string('name', 255).notNullable();
        table.integer('age');
        table.string('specialization', 255);
        table.string('teaching_level', 255);
        table.integer('experience');
        table.float('rating');
        table.string('province', 255);
        table.string('city', 255);
        table.foreign('teacher_id').references('users.id');
      })
      .createTable('students', function (table) {
        // table.increments('id').unsigned();
        table.integer('student_id').unsigned().primary();
        table.string('name', 255).notNullable();
        table.string('grade_level', 255);
        table.string('province', 255);
        table.string('city', 255);
        table.foreign('student_id').references('users.id');
      })
      .createTable('classes', function (table) {
        table.increments('id');
        table.string('class_name', 255).notNullable();
        table.text('class_level');
        table.float('price');
        table.string('class_type', 255);
        table.integer('teacher_id').unsigned();
        table.foreign('teacher_id').references('teachers.teacher_id');
      })
      .createTable('enrollment', function (table) {
        // table.increments('id');
        table.integer('student_id').unsigned();
        table.integer('class_id').unsigned();
        table.foreign('student_id').references('students.student_id');
        table.foreign('class_id').references('classes.id');
      });
  };

  exports.down = function(knex) {
    return knex.schema
      .dropTable('enrollment')
      .dropTable('classes')
      .dropTable('students')
      .dropTable('teachers')
      .dropTable('users');
  };
  