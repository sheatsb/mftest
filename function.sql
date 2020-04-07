CREATE OR REPLACE FUNCTION random_recipient( )
RETURNS SETOF recipients AS $$
    SELECT
	*
FROM
	recipients OFFSET floor(random() * (
		SELECT
			COUNT(*)
			FROM recipients
            WHERE is_active = true
            ))
LIMIT 1;
$$ LANGUAGE sql STABLE