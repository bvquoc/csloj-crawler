**<center>Nguồn: Beginner Free Contest 8</center>**

Đội tình nguyện viên Free Contest đang phát triển một hệ thống máy bán hàng tự động. Máy đang ở giai đoạn thử nghiệm và sẽ không trả lại tiền thừa, bạn phải trả đúng số tiền món hàng cần mua (không thừa, cũng không thiếu).

Bờm có kế hoạch mua một món đồ bằng máy bán hàng tự động này. Bờm là một đại gia có rất nhiều tiền xu, nhưng anh ta lại không thích mang nhiều tiền ra đường vì đồng xu khá nặng. Mặt khác, Bờm chỉ biết món đồ mình cần mua có giá tiền không vượt quá ~C~, chứ không biết giá chính xác của nó.

Bờm có đủ các đồng xu với tất cả mệnh giá không vượt quá ~C~, đồng thời số lượng đồng xu mỗi mệnh giá cũng đủ lớn (có thể coi là vô hạn). Bờm muốn biết mình cần mang ít nhất bao nhiêu đồng xu để chắc chắn mua được món hàng đó.

## Dữ liệu vào:
- Dòng thứ hai chứa một số nguyên dương ~T~ là số bộ dữ liệu ~(1 ≤ T ≤ 10)~;
- ~T~ dòng tiếp theo, dòng thứ ~i~ chứa một số nguyên dương ~C_i~ duy nhất là giá tiền tối đa của món đồ Bờm cần mua đã đề cập trong đề bài ~(C_i ≤ 10^{18})~.

## Dữ liệu ra:
Đưa ra kết quả lần lượt các bộ dữ liệu theo thứ tự từ ~1~ đến ~T~ . Với bộ dữ liệu thứ ~i~, kết quả được đưa ra trên ~2~ dòng:
- Dòng đầu tiên chứa số lượng đồng xu ít nhất có thể Bờm cần mang theo.
- Dòng thứ hai chứa danh sách mệnh giá các đồng xu mà Bờm sẽ mang theo. Nếu có nhiều cách chọn đồng xu thỏa mãn, bạn chỉ cần chọn một cách bất kỳ.

## Ví dụ:
#### Dữ liệu vào:
```
2
5
10
```

## Dữ liệu ra:
```
3
1 1 3
4
1 1 3 6
```

#### Giải thích:
- Với bộ dữ liệu đầu tiên:

| Giá tiền món hàng | Danh sách mệnh giá các đồng xu Bờm chọn |
|:-----------------:|:---------------------------------------:|
|         ~1~         | ~1~ đồng                                       |
|         ~2~         | ~1, 1~                                    |
|         ~3~         | ~3~ đồng                                   |
|         ~4~         | ~1, 3~                                    |
|         ~5~         |~ 1, 1, 3~                                 |

- Với bộ dữ liệu thứ hai:

| Giá tiền món hàng | Danh sách mệnh giá các đồng xu Bờm chọn |
|:-----------------:|:---------------------------------------:|
|         ~1~         | ~1~ đồng                                      |
|         ~2~         | ~1, 1~                                    |
|         ~3~         | ~3~ đồng                                    |
|         ~4~         | ~1, 3~                                    |
|         ~5~         |~ 1, 1, 3~                                 ||         ~6~         | ~6~                                       |
|         ~7~         | ~1, 6~                                    |
|         ~8~         | ~1, 1, 6~                                 |
|         ~9~         | ~3, 6~                                    |
|         ~10~        | ~1, 3, 6~                                 |

## Giới hạn:
- ~10\%~ số test ứng với ~10\%~ số điểm có ~C_i ≤ 10~;
- ~20\%~ số test ứng với ~20\%~ số điểm có ~C_i ≤ 20~;
- ~70\%~ số test ứng với ~70\%~ số điểm còn lại không có ràng buộc gì thêm.