**<center>Nguồn: Bài tập thầy Nguyễn Thanh Bình ôn Hải phòng - Ngày 10 tháng 11 năm 2020 (am)</center>**

BT bắt đầu học đánh đàn piano. Đàn piano của anh ta có ~n~ phím bấm. Phím thứ ~i~ khi bấm sẽ tạo  ra âm thanh có tần số ~a_i~. Khi BT đánh đàn piano, anh ta bấm đồng thời đúng ~k~ phím trong số ~n~ phím của cây đàn. Tuy vậy, đây là cây đàn kỳ lạ. Nếu bấm cùng một lúc ~k~ phím thì nó chỉ vang lên âm của phím có tần số âm thanh cao nhất. BT học chơi đàn bằng cách bấm tất cả các tổ hợp ~k~ phim khác nhau có thể có. Anh ta muốn biết tổng giá trị tần số của các âm phát ra khi bấm hết các tổ hợp này. Viết một chương trình nhỏ giúp anh ta.

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên ~n,k\ (1≤n≤10^5;1≤k≤50)~;
- Dòng thứ hai chứa ~n~ số nguyên ~a_1,a_2,…,a_n\ (0≤a_i≤10^9   i=1÷n)~.

## Dữ liệu ra:
- Một số nguyên duy nhất là kết quả tìm được. Vì con số này có thể rất lớn nên bạn chỉ cần in ra phần dư của nó khi chia cho ~10^9+7~.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
2 4 2 3 4
```

#### Dữ liệu ra:
```
39
```

#### Dữ liệu vào:
```
5 1
1 0 1 1 1
```

#### Dữ liệu ra:
```
4
5 2
3 3 4 0 0
```

#### Dữ liệu ra:
```
31
```


## Giới hạn:
- Subtask ~\#1: 40\%~ số điểm có ~n≤1000~;
- Subtask ~\#2:~ Không có ràng buộc bổ sung.