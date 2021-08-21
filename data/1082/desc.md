**<center>NGUỒN: ĐỀ THI LẬP ĐỘI TUYỂN HỌC SINH GIỎI CỦA TỈNH DỰ THI CHỌN HỌC SINH GIỎI QUỐC GIA THPT NĂM 2020 TỈNH QUẢNG NINH</center>**
<br>

Đất nước Alpha lên kế hoạch xây dựng ~2~ hệ thống đường cao tốc và đường tàu điện ngầm. Có tất cả ~n~ thành phố. Kế hoạch được chia thành ~q~ thời điểm. Tới mỗi thời điểm, chính phủ sẽ xây thêm một đường cao tốc hoặc một đường tàu điện ngầm giữa ~2~ thành phố nào đó. Khi xây dựng thêm đường mới, chính phủ rất quan tâm hệ thống ~2~ đường có **cân bằng** hay không. Hệ thống ~2~ đường được coi là **cân bằng** nếu như hai thành phố ~u~ và ~v~ bất kì có thể đi đến nhau theo đường cao tốc thì ~u~ và ~v~ cũng có thể đi tới nhau theo đường tàu điện ngầm và ngược lại.

**Yêu cầu**: Cho thông tin ~q~ thời điểm, hãy xác định tính tới thời điểm đang xét, ~2~ hệ thống đường cao tốc và tàu điện có cân bằng hay không.

**Lưu ý**: Khi xây thêm một đường cao tốc (đường tàu điện ngầm) giữa hai thành phố ~u~ và ~v~ thì có thể đi từ ~u~ đến ~v~ và ngược lại bằng đường cao tốc (đường tàu điện ngầm) đó. 

## Dữ liệu vào:
- Dòng đầu tiên chứa ~2~ số nguyên dương ~n,q~.
- Trong ~q~ dòng tiếp theo, dòng thứ ~i~ chứa ~3~ số nguyên dương ~x_i,  u_i,v_i~ xác định thông tin xây thêm đường ở thời điểm ~i~. Với ~x_i=1~ tương ứng xây dựng thêm đường cao tốc giữa ~u_i\text{ và }v_i, x_i=2~ tương ứng với việc xây thêm đường tàu điện ngầm giữa ~u_i\text{ và }v_i \ (1≤u_i,v_i≤n)~.

## Dữ liệu ra:
- ~q~ dòng, dòng thứ ~i~ ghi **Yes/No** tương ứng hệ thống đường có cân bằng tại thời điểm ~i~ hay không.

## Ví dụ:
#### Dữ liệu vào:
```
7 10
1 1 2
1 2 3
2 1 3
2 1 2
1 3 4
2 2 5
1 4 5
2 1 4
2 6 7
1 6 7
```

#### Dữ liệu ra:
```
No
No
No
Yes
No
No
No
Yes
No
Yes
```

#### Dữ liệu vào:
```
4 9
1 1 2
2 2 1
1 2 1
2 3 4
1 1 3
1 2 4
1 3 4
2 1 3
2 4 3
```

#### Dữ liệu ra:
```
No
Yes
Yes
No
No
No
No
Yes
Yes
```

## Giới hạn:
- Có ~30\%~ số test tương ứng ~30\%~ số điểm có ~1≤n≤20,1≤ q≤100~;
- Có ~30\%~ số test khác tương ứng ~30\%~ số điểm có ~100 < n, q ≤ 500~;
- Có ~20\%~ số test khác tương ứng với ~20\%~ số điểm có ~500 < n, q ≤ 5000~;
- Có ~20\%~ số test còn lại có ~5000 < n ,q ≤ 2.10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)