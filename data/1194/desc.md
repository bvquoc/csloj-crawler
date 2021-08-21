**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Đất nước Alpha lên kế hoạch xây dựng ~2~ hệ thống đường cao tốc và đường tàu điện ngầm. Có tất cả ~n~ thành phố. Kế hoạch được chia thành ~q~ thời điểm. Tới mỗi thời điểm, chính phủ sẽ xây thêm một đường cao tốc hoặc một đường tàu điện ngầm giữa hai thành phố nào đó. Để đánh giá độ rủi ro, chính phủ rất cần biết hệ thống hai đường có cân bằng hay không. Tại mỗi thời điểm, hệ thống hai đường được coi là cân bằng nếu như ~u~ và ~v~ có thể đi đến nhau theo đường cao tốc thì ~u~ và ~v~ cũng có thể đi tới nhau theo đường tàu điện ngầm và ngược lại.

**Yêu cầu**: Cho thông tin ~q~ thời điểm, hãy xác định tính tới thời điểm đang xét, hai hệ thống đường cao tốc và tàu điện có cân bằng hay không.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~n,q~;
- Trong ~q~ dòng tiếp theo, dòng thứ ~i~ chứa ba số nguyên dương ~x_i  u_i,v_i~ xác định thông tin xây thêm đường ở thời điểm ~i~. Với ~x_i=1~ tương ứng xây dựng thêm đường cao tốc giữa ~u_i~ và ~v_i~, ~x_i=2~ tương ứng với việc xây thêm đường tàu điện ngầm giữa ~u_i~ và ~v_i~.

## Dữ liệu ra:
- Ghi ra ~q~ dòng, dòng thứ ~i~ ghi `Yes/No` tương ứng hệ thống đường có cân bằng tại thời điểm ~i~ hay không.

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

## Giới hạn:
- Có ~30\%~ số test tương ứng ~30\%~ số điểm có ~n≤20,q≤100~;
- Có ~30\%~ số test khác tương ứng ~30\%~ số điểm có ~n,q≤5000~;
- ~40\%~ số test còn lại có ~n≤10^5,q≤2.10^5~.