<!--**<center>NGUỒN: ĐỀ THI THỬ VOI 2015 3HB (Hải phòng - Hải Dương - Hưng Yên - Bắc Giang)</center>**-->

Cho một đồ thị dạng cây gồm ~N~ đỉnh. Ban đầu các đỉnh có trọng số bằng ~0~, người ta thực hiện ~M~ phép biến đổi cây có dạng ~(u, v, c)~ nghĩa là cộng thêm vào mỗi trọng số của các đỉnh trên đường đi ngắn nhất từ ~u~ đến ~v~ thêm ~c~ đơn vị. Bạn phải trả lời ~Q~ truy vấn dạng ~(u, v)~ yêu cầu đưa ra tổng trọng số các đỉnh trên đường đi từ ~u~ đến ~v~.

## Dữ liệu vào:
- Dòng dầu chứa ba số nguyên ~N, M, Q\ (1 ≤ N ≤ 10^5; 0 ≤ M, Q ≤ 10^5)~;
- ~N – 1~ dòng tiếp, mỗi dòng ghi hai số nguyên ~u, v~ thể hiện có một cạnh nối ~u~ với ~v~ trên cây ~(1 ≤ u, v ≤ N)~;
- ~M~ dòng tiếp, mỗi dòng ghi ba số nguyên ~(u, v, c)~ thể hiện một thao tác biến đổi ~(1 ≤ u, v ≤ N, |c| ≤ 10^5)~;
- ~Q~ dòng tiếp, mỗi dòng ghi một cặp số nguyên ~(u, v)~ thể hiện một truy vấn ~(1 ≤ u, v ≤ N)~.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra ~Q~ dòng, dòng thứ ~j~ ghi kết quả của truy vấn ~j~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2 1
1 2
1 3
1 2 1
1 3 2
2 3
```

#### Dữ liệu ra:
```
6
```

**Chú ý:** ~50\%~ số test có ~N,M ,Q≤5000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)