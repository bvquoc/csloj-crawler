HD được nhận vào làm đầu bếp tại một nhà hàng bánh ngọt nổi tiếng. Nhiệm vụ đầu tiên của HD là phải cắt một chiếc bánh hình chữ nhật kích thước ~h,w~ thành:
- Các miếng bánh cắt thành các hình vuông có kích thước bằng nhau;
- Độ dài cạnh hình vuông là lớn nhất.

**Yêu cầu:** Bạn hãy trả lời ~t~ câu hỏi dạng có thể cắt được bao nhiêu miếng bánh hình vuông có cạnh lớn nhất?

## Dữ liệu vào: 
- Dòng đầu ghi số nguyên dương ~t\ (1≤t≤1000)~ là số lượng câu hỏi;
- ~t~ dòng tiếp theo, dòng thứ ~i~ là câu hỏi ~i~ có ~2~ số nguyên dương ~h,w\ (1≤h,w≤1000)~.

## Dữ liệu ra:
- Ghi ra trên ~t~ dòng, dòng thứ ~i~ là đáp án câu hỏi ~i~.

## Ví dụ:
#### Dữ liệu vào:
```
2
2 2
6 9
```

#### Dữ liệu ra:
```
1
6
```

#### Giải thích:
- Câu hỏi ~1~: bánh hình vuông cỡ lớn nhất ~2×2~ có ~1~ bánh;
- Câu hỏi ~2~: Từ bánh ~6×9~ ta cắt thành có thể cắt thành:
	- ~54~ bánh ~1×1~;
	- ~6~ bánh ~3×3~.
	
**Đáp án:** ~6~.