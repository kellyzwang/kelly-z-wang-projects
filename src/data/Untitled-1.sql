-- Find distributors that
-- A) Has an average product price of less than 200 dollars over the past 10 years
-- B) sells products that are of type 'dairy'
SELECT A.DistributorName FROM
(SELECT D.DistributorID, D.DistributorName, AVG(P.ProductPrice) AS AvgProductPrice
FROM tblPRODUCT_TYPE PT
JOIN tblPRODUCT P ON P.ProductTypeID = PT.ProductTypeID
JOIN tblORDER_PRODUCT OP ON OP.ProductID = P.ProductID
JOIN tblSALES_ORDER SO ON SO.SalesOrderID = OP.SalesOrderID
JOIN tblDISTRIBUTOR D ON D.DistributorID = SO.DistributorID
WHERE SO.OrderDate > DATEADD(YEAR, -10, GETDATE())
GROUP BY D.DistributorID, D.DistributorName
HAVING AVG(P.ProductPrice) < 200) AS A,
 
(SELECT D.DistributorID, D.DistributorName
FROM tblPRODUCT_TYPE PT
JOIN tblPRODUCT P ON P.ProductTypeID = PT.ProductTypeID
JOIN tblORDER_PRODUCT OP ON OP.ProductID = P.ProductID
JOIN tblSALES_ORDER SO ON SO.SalesOrderID = OP.SalesOrderID
JOIN tblDISTRIBUTOR D ON D.DistributorID = SO.DistributorID
WHERE PT.ProductTypeName = 'dairy'
GROUP BY D.DistributorID, D.DistributorName) AS B
 
WHERE A.DistributorID = B.DistributorID
