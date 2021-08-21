<!--
**<center>NGUỒN: Ôn HN tháng 11/2017, Đỗ Đức Đông, Ngày 1</center>**
-->

Ðể trình diễn một tiết mục trong màn khai mạc Ðại hội thể thao quốc tế, dạo diễn Q đã mời ~n~ vận động viên tham gia. Theo kịch bản, ~n~ vận động viên sẽ đuợc xếp thành một khối có dạng hình chữ nhật gồm một số hàng và một số cột. Cụ thể, các vận động viên đứng ở các vị trí có tọa độ nguyên và liên tiếp nhau, xếp thành các hàng song song với trục tọa độ để tạo thành một khối có dạng hình chữ nhật. Hiện tại, vận động viên thứ ~i~ đang ở vị trí ~(x, y)~, nếu vận động viên này di chuyển đến vị trí ~(u, v)~ thì sẽ mất năng luợng là ~|x – u| + |y – v|~.

**Yêu cầu**: Hãy giúp dạo diễn xác định cách xếp hàng để tổng năng luợng di chuyển của cả ~𝑛~ vận động viên là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương ~n~
- ~n~ dòng thếp theo, mỗi dòng chứa hai số nguyên dương ~x_i, y_i~ là tọa độ của người thứ ~i~

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng năng lượng di chuyển của ~n~ vận động viên.

## Ví dụ:
#### Dữ liệu vào:
```
3
1 1
1 2
3 3
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- ~1 ≤ n ≤ 5\times 10^4, |x_i|, |y_i| ≤ 10^9~ 