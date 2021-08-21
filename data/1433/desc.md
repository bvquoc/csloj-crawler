**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Trong khu vực được xét có n thành phố, đánh số từ ~1~ đến ~n~. Các thành phố được nối với nhau bằng ~m~ tuyến đường một chiều. Với mỗi tuyến đường người ta cho biết thành phố xuất phát, thành phố đích và độ dài của nó. Giữa hai thành phố có thể có nhiều tuyến đường nối.

Đường đi ngắn nhất từ ~A~ tới ~B~ là đường mà tổng độ dài các tuyến đi qua là nhỏ nhất.

Mỗi tuyến đường có thể thuộc một hoặc nhiều đường đi ngắn nhất giữa các cặp thành phố.

**Yêu cầu:** Cho ~n, m~ và thông tin về mỗi tuyến đường. Với mỗi tuyến hãy xác định số lượng đường ngắn nhất mà tuyến đó tham gia. Số này có thể rất lớn nên bạn chỉ cần đưa ra số dư của kết quả tìm được khi chia cho ~10^9+7~.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n~ và ~m\ (1 ≤ n ≤ 1500, 1 ≤ m ≤ 5000)~;
- Mỗi dòng trong ~m~ dòng sau chứa ba số nguyên xác định điểm đầu, điểm cuối và độ dài con đường (độ dài không vượt quá ~10000~).

## Dữ liệu ra:
- Đưa ra ~m~ dòng, mỗi dòng chứa một số nguyên, dòng thứ ~i~ xác định kết quả tìm được với tuyến đường ~i~.

## Ví dụ:
#### Dữ liệu vào:
```
4 4
1 2 5
2 3 5
3 4 5
1 4 8
```

#### Dữ liệu ra:
```
2
3
2
1
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)