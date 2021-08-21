**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Khi crush chủ động nhắn tin, việc đầu tiên ta nghĩ đến sẽ là đặt tên con như thế nào...

Ban đầu, bạn định đặt tên con là ~S~ (một xâu chỉ chứa các ký tự latin thường). Tuy nhiên tên dài quá sẽ khiến con bạn mất nhiều thời gian mỗi khi đi thi. Do đó bạn quyết định xóa bớt một số ký tự trên ~S~, chỉ giữ lại ~k~ ký tự và giữ nguyên thứ tự trên ~S~. Rõ ràng có thể có nhiều cách xóa khác nhau, do đó bạn sẽ chọn cách xóa sao cho xâu thu được có thứ tự từ điển lớn nhất có thể (dù sao thì đứng cuối sổ điểm cũng giúp giảm khả năng bị gọi lên trả bài mà).

Hãy viết chương trình thực hiện điều đó, kể cả khi suốt thời sinh viên của bạn không có một mối tình nào, cũng chưa từng crush một ai!

## Dữ liệu vào:
- Dòng đầu chứa xâu ~S~;
- Dòng tiếp theo chứa số nguyên dương ~k\ (1 ≤ k < |S|)~.

## Dữ liệu ra:
- Ghi một xâu có ~k~ ký tự, là xâu con có thứ tự từ điển lớn nhất của ~S~.

## Ví dụ:
#### Dữ liệu vào:
```
cxabdfa
3
```

#### Dữ liệu ra:
```
xfa
```

## Giới hạn:
- Có ~50\%~ test với ~1 ≤ |S| ≤ 20~;
- Có ~50\%~ test với ~20 < |S| ≤ 10^5~.