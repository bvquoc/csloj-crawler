Cho một đồ thị có hướng gồm ~n~ đỉnh và ~m~ cung, hai con robot đứng ở đỉnh ~1~ và ~n~. Hãy tìm cách di chuyển nhanh nhất hai con robot đến gặp nhau tại một đỉnh của đồ thị, biết rằng cả hai con robot chỉ được chạy theo các cung định hướng và không được dừng lại cho tới lúc gặp nhau tại một đỉnh nào đó. Thời gian robot đi qua một cung bất kỳ luôn là ~1~ đơn vị thời gian.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n, m~;
- ~m~ dòng tiếp theo mỗi dòng chứa hai số nguyên ~u, v~ tương ứng với cung ~(u,v)~ của đồ thị.

## Dữ liệu ra: 
- Ghi thời gian tính từ lúc bắt đầu di chuyển đến khi hai robot gặp nhau (nếu không có phương án thì ghi ~-1~);
- Trong trường hợp có phương án thực hiện thì dòng thứ hai ghi hành trình của robot thứ nhất theo thứ tự từ đỉnh ~1~ đến đỉnh gặp nhau và dòng thứ ba ghi hành trình của robot thứ hai với qui cách tương tự.

## Ví dụ:
#### Dữ liệu vào:
```
2 2
1 2
2 1
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
4 5
1 2
2 1
2 4
3 2
4 3
```

#### Dữ liệu ra:
```
4
1 2 4 3 2
4 3 2 1 2
```

<center><img src="/images/problems/568/RMOVE.png" width="250px" /></center>

## Giới hạn:
- ~1\le n \le 1000; 1\le m\le 5000~.