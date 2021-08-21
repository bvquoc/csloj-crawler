Trong một đài phun nước, bạn có ~2~ chiếc bình dung tích ~a,b~ lít. Ban đầu ~2~ chiếc bình đều không chứa nước. Bạn chỉ được sử dụng ~2~ chiếc bình ~a~ và ~b~. Hãy cho biết có thể lấy được chính xác ~c~ lít nước hay không?

**Yêu cầu:** Bạn hãy trả lời ~t~ câu hỏi dạng cho biết có thể sử dụng bình ~a,b~ để lấy đúng ~c~ lít hay không?

## Dữ liệu vào: 
- Dòng đầu chứa số nguyên dương ~t\ (1≤t≤100)~ là số lượng câu hỏi;
- ~t~ dòng tiếp theo, dòng thứ ~i~ là câu hỏi ~i~ có ~3~ số nguyên dương ~a,b,c\ (1≤a,b,c≤10^3)~.

## Dữ liệu ra:
- Ghi ra trên ~t~ dòng, dòng thứ ~i~ là đáp án câu hỏi ~i~, ghi `YES` nếu có thế lấy được ~c~ lít, ghi `NO` nếu không lấy được.

## Ví dụ:
#### Dữ liệu vào:
```
2
5 3 4
3 6 4
```

#### Dữ liệu ra:
```
YES
NO
```

#### Giải thích:
- Câu hỏi 1:
	- Bước ~1: a=0,b=0~;
	- Bước ~2: a=5,b=0~;
	- Bước ~3: a=2,b=3~;
	- Bước ~4: a=0,b=2~;
	- Bước ~5: a=5,b=2~;
	- Bước ~6: a=4,b=3~.