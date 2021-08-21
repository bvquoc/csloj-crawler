Hàng ngày khi lấy sữa, ~N~ con bò của bác John luôn xếp hàng theo thứ tự không đổi được đánh số từ ~1~ đến ~N~. Một hôm bác John quyết định tổ chức một trò chơi cho một số con bò. Để đơn giản, bác John sẽ chọn ra một đoạn liên tiếp các con bò để tham dự trò chơi. Tuy nhiên để trò chơi diễn ra vui vẻ, các con bò phải không quá chênh lệch về chiều cao.

Bác John đã đo chiều cao của từng con bòn, con bò thứ ~i~ có chiều cao là ~h_i~ (nanomet) và chuẩn bị một danh sách gồm ~Q~ đoạn các con bò liên tiếp. Với mỗi đoạn, bác John muốn xác định chênh lệch chiều cao giữa con bò thấp nhất và cao nhất trong đoạn đó. Bạn hãy giúp bác John thực hiện công việc này!

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N~ và ~Q~;
- Dòng thứ hai chứa ~N~ số nguyên dương ~h_1, h_2, …, h_N~;
- ~Q~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên ~u_i, v_i~ là đoạn các con bò thứ ~i~.

Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng ~Q~ số nguyên, số thứ ~i~ là chênh lệch chiều cao lớn nhất của các con bò trong đoạn ~u_i~ đến ~v_i~.

## Ví dụ:
#### Dữ liệu vào:
```
6 3
1 7 3 4 2 5
1 5
4 6
2 2
```

#### Dữ liệu ra:
```
6 3 0
```

## Giới hạn:
- ~1 ≤ N ≤ 10^5; 1 ≤ u_i ≤ v_i ≤ n; 1 ≤ Q ≤ 10^5; 1 ≤ a_i ≤ 10^6~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)